/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*
https://leetcode.com/problems/remove-element/

解法:
1. 迭代nums
2. 如果nums[i]等於val就用splice移除
3. 迭代完後回傳長度
*/

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};

console.log(removeElement([3, 2, 2, 3], 3)) // [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // [0, 1, 3, 0, 4]