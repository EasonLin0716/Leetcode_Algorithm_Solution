/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  var minusAndIndex = [];
  for (var i = 0; i < costs.length; i++) {
    // 這邊會存 [[AB的差, 索引], ...]
    minusAndIndex.push([costs[i][0] - costs[i][1], i]);
  }
  // 根據 AB 的差作排序 中間以左是選A更划算 中間以右是選B更划算
  minusAndIndex.sort((a, b) => a[0] - b[0]);
  var left = 0,
    right = costs.length - 1;
  var sum = 0;
  while (left < right) {
    // 去抓出 costs 索引
    var firstIndex = minusAndIndex[left][1];
    var lastIndex = minusAndIndex[right][1];
    // 左邊選A
    sum += costs[firstIndex][0];
    // 右邊選B
    sum += costs[lastIndex][1];
    left++;
    right--;
  }
  return sum;
};
