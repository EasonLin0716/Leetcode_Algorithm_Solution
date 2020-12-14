/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

https://leetcode.com/problems/third-maximum-number/
*/

/*
解法
1. 將 nums 由大到小排序後存至 set (去掉多餘的數字)
2. 如果 nums 的長度等於 1 或 2 則回傳最大數
3. 若大於 2 則回傳索引 2 (第三大的數字)
*/
// var thirdMax = function (nums) {
//   nums = [...new Set(nums.sort((a, b) => b - a))];
//   if (nums.length <= 2) return nums[0];
//   return nums[2];
// };

// 思路：
// 宣告 a, b, c 為負無限大
// 遍歷 nums
// 　　如果被遍歷到的值等於 a, b 或 c
// 　　　　跳過此次迴圈
// 　　如果被遍歷到的值大於 a
// 　　　　b 給 c，a 給 b，遍歷值給 a
// 　　如果被遍歷到的值大於 b
// 　　　　b 給 c，遍歷值給 b
// 　　如果被遍歷到的值大於 c
// 　　　　遍歷值給 c
// 如果 c 等於負無限大，就回傳 a 否則回傳 c
// 我原本的寫法一直卡在重複數字時一樣會進判定，導致陣列未排序時在部分輸入會錯誤的問題，這個解法運用 continue 解決了重複數字的問題，覺得非常妙（也算是第一次看到 continue 這個東西），記錄在這邊

var thirdMax = function (nums) {
  let [a, b, c] = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === a || nums[i] === b || nums[i] === c) {
      continue;
    }
    if (nums[i] > a) {
      c = b;
      b = a;
      a = nums[i];
    } else if (nums[i] > b) {
      c = b;
      b = nums[i];
    } else if (nums[i] > c) {
      c = nums[i];
    }
  }
  return c === -Infinity ? a : c;
};

console.log(thirdMax([3, 2, 1])); // expected output: 1
console.log(thirdMax([1, 2])); // expected output: 1
console.log(thirdMax([2, 2, 3, 1])); // expected output: 1
console.log(thirdMax([5, 2, 2])); // 5
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // 2
