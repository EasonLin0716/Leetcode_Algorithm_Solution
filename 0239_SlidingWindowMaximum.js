// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// https://leetcode.com/problems/sliding-window-maximum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//   const q = []; // stores *indices*
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[q[q.length - 1]] <= nums[i]) {
//       q.pop();
//     }
//     q.push(i);
//     // remove first element if it's outside the window
//     if (q[0] === i - k) {
//       q.shift();
//     }
//     // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
//     if (i >= k - 1) {
//       res.push(nums[q[0]]);
//     }
//   }
//   return res;
// };
// 思路
// 宣告一個 dq 拿來放比大小用
// 宣告一個 res 拿來存答案
// 遍歷 nums
//   當 dq 有值且 dq 最上層 < nums[i]
//     拿掉 dq 最上層
//   將 nums[i] 推入 dq  (此處 dq 可能為空或最上層值 > nums[i])
//   如果 dq 最下層等於 nums[i - k]
//     拿掉 dq 最下層
//   如果 i 大於 k - 2  (表示 window 已經開始移動)
//     dq 最下層加入 res
var maxSlidingWindow = function (nums, k) {
  const dq = [];
  const res = [];
  for (i = 0; i < nums.length; i++) {
    while (dq[0] && dq[dq.length - 1] < nums[i]) {
      dq.pop();
    }
    dq.push(nums[i]);
    if (dq[0] === nums[i - k]) {
      dq.shift();
    }
    if (i > k - 2) {
      res.push(dq[0]);
    }
  }
  return res;
};

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
