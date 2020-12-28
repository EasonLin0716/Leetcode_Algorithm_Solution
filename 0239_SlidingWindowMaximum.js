// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// https://leetcode.com/problems/sliding-window-maximum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let [l, r] = [0, k];
  const res = [];
  while (r < nums.length) {
    const ary = [];
    for (; l < r; l++) {
      ary.push(nums[l]);
    }
    let maxNumInAry = Math.max(...ary);
    res.push(maxNumInAry);
    r++;
    l = r - k;
  }
  return res;
};

// 思路：
// 宣告 left 為 0，right 為 k - 1
// 宣告結果為 res []
// 當 k 小於 nums 長度時
//   宣告一個陣列 ary []
//   遍歷 nums 的 l ~ k
//     將 nums[l] ~ nums[k] 的最大值推進 res
// 回傳 res

/**
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7      3
 * 1 [3  -1  -3] 5  3  6  7       3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 */

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
