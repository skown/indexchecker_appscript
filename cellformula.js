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
