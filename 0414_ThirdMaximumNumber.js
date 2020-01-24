/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

https://leetcode.com/problems/third-maximum-number/
*/

/*
解法
1. 將 nums 由大到小排序後存至 set (去掉多餘的數字)
2. 如果 nums 的長度等於 1 或 2 則回傳最大數
3. 若大於 2 則回傳索引 2 (第三大的數字)
*/
var thirdMax = function(nums) {
  nums = [...new Set(nums.sort((a, b) => b - a))]
  if (nums.length <= 2) return nums[0]
  return nums[2]
}

console.log(thirdMax([3, 2, 1])) // expected output: 1
console.log(thirdMax([1, 2])) // expected output: 1
console.log(thirdMax([2, 2, 3, 1])) // expected output: 1
