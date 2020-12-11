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
var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};
// 96ms(40.13%) 40.9MB(64.39%)

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
