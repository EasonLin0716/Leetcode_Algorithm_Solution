/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
You are given a target value to search. If found in the array return its index, otherwise return -1.

https://leetcode.com/problems/search-in-rotated-sorted-array/

解法:
1. 將陣列排序
2. 回傳 index
*/

var search = function(nums, target) {
  return nums.indexOf(target)
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
