/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  var minusAndIndex = [];
  for (var i = 0; i < costs.length; i++) {
    minusAndIndex.push([costs[i][0] - costs[i][1], i]);
  }
  minusAndIndex.sort((a, b) => a[0] - b[0]);
  var first = 0,
    last = costs.length - 1;
  var sum = 0;
  while (first < last) {
    var firstIndex = minusAndIndex[first][1];
    var lastIndex = minusAndIndex[last][1];
    sum += costs[firstIndex][0];
    sum += costs[lastIndex][1];
    first++;
    last--;
  }
  return sum;
};
