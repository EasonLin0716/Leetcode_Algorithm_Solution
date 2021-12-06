/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  var res = 0;
  for (var i = 0; i < operations.length; i++) {
    if (operations[i][1] === "+") {
      res++;
    } else {
      res--;
    }
  }
  return res;
};
