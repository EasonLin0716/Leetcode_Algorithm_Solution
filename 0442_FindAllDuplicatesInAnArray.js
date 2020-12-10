// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?
// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
};
// 1056ms(7.52%) 49.7MB(41.37%)
// 思路：
// 先進行排序
// 宣告索引為 0
// 當索引小於陣列長度時
// 　　如果目前取得索引的值不等於下一個索引的值
// 　　　　就把目前索引的值從陣列取出
// 　　否則
// 　　　　索引 + 1
// 回傳陣列
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
