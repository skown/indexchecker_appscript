function cell_formula() {
  const url_values = sheet.getRange("Sheet1!C2:C5").getValues();

  const results = url_values.map(function (row) {
    return row[0];
  });
  console.log(results.map((url) => dataforseo(url, "en", 2840)));
}

function loop_check() {
  const lastRow = sheet.getLastRow();
  //const lastColumn = sheet.getLastColumn();
  const sortRange = sheet.getSheetValues(2, 3, lastRow, 1);
  //console.log(lastColumn + 1)
}

/*
const url_array = ["https://brainly.com/question/14863564", "https://brainly.com/question/1713545","https://brainly.com/question/30072057", "https://brainly.com/question/30071740"]

const obj_requests = 
  {
    'url': 'https://api.dataforseo.com/v3/serp/google/organic/live/advanced',
    'method': 'POST',
    'content-type': 'application/json',
    'headers': {
      "Authorization": 'Basic ' + Utilities.base64Encode('martyn.skowron@gmail.com' + ':' + 'e9b7273ff40ffc3e')
    },
    'muteHttpExceptions': true,
    "payload": JSON.stringify([{'keyword':"fsd", 'language_code': 'en', 'location_code': 2840}])
  }

function show_obj() {
  const payload = obj_requests['payload'];
  const finished = JSON.parse(payload)
  console.log(finished[0]['keyword'])
}
*/
