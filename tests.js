//Check if get_data returns an array of 100 elements
function test_get_data() {
  var result = get_data();

  if (Array.isArray(result) && result.length === 100) {
    Logger.log("Test passed!");
  } else {
    Logger.log("Test failed!");
  }
}
