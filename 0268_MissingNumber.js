// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   for (let i = 0; i <= nums.length; i++) {
//     if (!nums.includes(i)) return i;
//   }
// };
// 392ms(5.13%) 40.8MB(74.54%)
// var missingNumber = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] !== i) return i;
//   }
// };
// 96ms(40.13%) 40.9MB(64.39%)
// var missingNumber = function (nums) {
//   const res = Array.from([...nums, -1], (x) => -1);
//   for (let i = 0; i < nums.length; i++) {
//     res[nums[i]] = nums[i];
//   }
//   return res.indexOf(-1);
// };
// 思路：
// nums 最後面增加一個 Infinity
// 遍歷 nums
// 　　如果 nums[i] 等於 Infinity 省略以下並繼續迴圈
// 　　宣告 v 為 nums[i] 絕對值
// 　　把 nums[v] 設定為負數
// 遍歷 nums
// 　　如果 nums[i] > 0 回傳 i
// 回傳 0 在 nums 中的索引
// 這題每個數字最多只出現一次，一開始先 push 一個 Infinity 當作替代的數字在最後，接著運用數字存取索引並翻轉為負數，最後遍歷一次，沒有被翻轉到的就會是缺少的數字，因為條件式驗證不了 0，所以最後就回傳 0 的索引 (-0 也適用)

var missingNumber = function (nums) {
  nums.push(Infinity);
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) === Infinity) continue;
    const v = Math.abs(nums[i]);
    nums[v] = -nums[v];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i;
  }
  return nums.indexOf(0);
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
console.log(missingNumber([2, 0])); // 1
console.log(missingNumber([2, 0, 3])); // 1
console.log(missingNumber([2, 3, 0])); // 1
console.log(missingNumber([0, 2, 3, 1, 4, 5]));
console.log(missingNumber([6, 2, 3, 4, 0, 5]));
console.log(missingNumber([1, 0, 3])); // 2
