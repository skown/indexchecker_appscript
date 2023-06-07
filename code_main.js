// Creation of 1d array from 2d nested array in terms of having [url1, url2, url3,..] array
function get_data() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const active_sheet = ss.getSheets()[0];
  const sheet_data = active_sheet.getRange("C2:C101").getValues();
  let new_1d_array = [];
  sheet_data.forEach((row) => {
    new_1d_array.push(row[0]);
  });
  return new_1d_array;
}

// Creation of request object array from 1d array in terms of sending all requests in an async way using fetchAll method.
function print_new_array() {
  const new_array = get_data().map((url) => {
    return {
      url: "https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
      method: "POST",
      "content-type": "application/json",
      headers: {
        Authorization: "Basic " + Utilities.base64Encode("mail" + ":" + "pass"),
      },
      muteHttpExceptions: true,
      payload: JSON.stringify([
        { keyword: url, language_code: "en", location_code: 2840 },
      ]),
    };
  });
  return new_array;
}

// Sending all requests, parsing data, and assigning them to the next column
function show_results() {
  const new_results = UrlFetchApp.fetchAll(print_new_array());
  const reframed = new_results.map((result) =>
    JSON.parse(result.getContentText())
  );

  // Parsing data from JSON and saving it to the variable
  const results_array = reframed.map((req) => {
    if (req["tasks"][0]["result"][0]["items_count"] > 0) {
      if (
        req["tasks"][0]["data"]["keyword"] ==
        req["tasks"][0]["result"][0]["items"][0]["url"]
      ) {
        return ["Indexed"];
      } else {
        return ["Not Indexed"];
      }
    } else {
      return ["There is no data"];
    }
  });

  // Gathering last column with data
  const lastColumn = sheet.getLastColumn();
  // Assiging data from request into the next column
  sheet
    .getRange(2, lastColumn + 1, results_array.length, results_array[0].length)
    .setValues(results_array);
  // Gather data about current request date
  const currentDay = new Date();
  // Assiging date to the first row
  sheet.getRange(1, lastColumn + 1).setValue(currentDay);
}
