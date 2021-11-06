// 1. 宣告 list = nums長度, same = [], sum = 0
// 2. 遍歷 nums 依索引塞入

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  var sum = 0,
    list = new Array(nums.length),
    same = [];
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (list[num] === undefined) list[num] = num;
    else same.push(num);
  }

  while (same.length) {
    var num = same.pop();
    num++;
    sum++;

    while (true) {
      if (list[num]) {
        num++;
        sum++;
      } else {
        list[num] = num;
        break;
      }
    }
  }
  return sum;
};

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7])); // 6
console.log(minIncrementForUnique([0, 0])); // 1
