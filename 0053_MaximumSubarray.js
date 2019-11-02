/**
 * @param {number[]} nums
 * @return {number}
 */

/*
https://leetcode.com/problems/maximum-subarray/

解法:
1. 將 currSum, maxSum 宣告為負無限大
2. 迭代陣列
3. 如果 currSum 為負數，就設為0
4. 將索引值加進 currSum
5. 和 maxSum 比較，取較大者
*/

var maxSubArray = function (nums) {
  // 1. 將 currSum, maxSum 宣告為負無限大
  let currSum = -Infinity;
  let maxSum = -Infinity;
  // 2. 迭代陣列
  for (let i = 0; i < nums.length; i++) {
    // 3. 如果 currSum 為負數，就設為0
    currSum = Math.max(0, currSum);
    // 4. 將索引值加進 currSum
    currSum += nums[i];
    // 5. 和 maxSum 比較，取較大者
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // expected output: 6