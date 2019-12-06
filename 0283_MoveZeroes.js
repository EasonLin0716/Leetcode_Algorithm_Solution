/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

leetcode: https://leetcode.com/problems/move-zeroes/submissions/
解法：
1. 設定累加變數為 0
2. 遍歷 nums 如果找到 0 就增加累加變數
3. 如果不等於 0 但有累加變數，就把累加變數往前推
4. 遍歷結束，回傳 nums
*/
var moveZeroes = function(nums) {
  let snowBallSize = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      snowBallSize++
    } else if (snowBallSize > 0) {
      let t = nums[i]
      nums[i] = 0
      nums[i - snowBallSize] = t
    }
  }
  return nums
}

// my original solution

// var moveZeroes = function(nums) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       nums[nums.length] = 0
//       i--
//     }
//     count++
//     if (count === nums.length) {
//       break
//     }
//   }
//   return nums
// }

console.log(moveZeroes([0, 1, 0, 3, 12])) // [1,3,12,0,0]
console.log(moveZeroes([2, 1])) //[2,1]
