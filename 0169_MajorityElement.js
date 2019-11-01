/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
https://leetcode.com/problems/majority-element/ 
找出一個在一組數字中出現超過一半次數的「主要數字」

解法:
1. 將數字排序
2. 超過一半次數的數字會出現在最中間(不論大小)
*/


var majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return nums[Math.round(nums.length / 2) - 1];
}

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2