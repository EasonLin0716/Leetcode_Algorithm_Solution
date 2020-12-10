// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?
// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] !== nums[i + 1]) {
//       nums.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   return nums;
// };
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

// var findDuplicates = function (nums) {
//   return nums.sort().filter((x, i) => {
//     return x === nums[i - 1];
//   });
// };
// 思路：
// 先進行排序
// 遍歷並找出重複的部分

var findDuplicates = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      res.push(Math.abs(index + 1));
    }
    nums[index] = -nums[index];
  }
  return res;
};
// 解法：
// （參考網站上最佳解）
// 宣告 res 為空陣列
// 遍歷 nums
// 　　宣告 index 為目前被遍歷到的絕對值 - 1
// 　　如果 nums[index] 小於 0
// 　　　　就把 index + 1 加入 res
// 　　把 nums[index] 改為 -nums[index]
//
// 116ms(70.09%) 46.2MB(88.89%)
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
