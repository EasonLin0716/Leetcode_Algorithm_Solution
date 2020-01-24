/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
https://leetcode.com/problems/rotate-array/
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

/*
解法1:
1. 將 nums 中最後 k 個數字 splice 並展開
2. 將展開後的數字照原順序放到 nums 最前面
*/

var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
}

/*
解法2:
1. 用 while loop 如果 k > 0 就不斷執行
2. 將 array 最後一個值儲存到 temp
3. 將 array 最後一個值 pop 掉
4. 將 temp 的值 unshift 進 array
5. k = k - 1
*/
// var rotate = function(nums, k) {
//   while (k > 0) {
//     const temp = nums.pop()
//     nums.unshift(temp)
//     k -= 1
//   }
//   return nums
// }

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)) // [3,99,-1,-100]
