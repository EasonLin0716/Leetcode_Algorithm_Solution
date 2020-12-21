/*
https://leetcode.com/problems/two-sum/submissions/
solution:
1. iterate numbers in the array
2. try every combination of each number
3. once there's an answer, return it

*/

// var twoSum = function (nums, target) {
//   // 1. iterate numbers in the array
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       // 2. try every combination of each number
//       if (nums[i] + nums[j] === target) {
//         // 3. once there's an answer, return it
//         return [i, j]
//       }
//     }
//   }
// };

/**
 * 解法：
 * 先宣告 map 用來存鍵值對，鍵是計算過的數字，值是索引
 * 遍歷 nums
 * 　　把現在索引值宣告成 v
 * 　　如果目標 target 扣除 v 是找得到的
 * 　　　　就回傳找到的鍵的索引以及目前的索引
 * 　　否則
 * 　　　　把 v 的值寫為鍵，索引寫為值
 * 這題本來是用兩層暴力解，後來發現網路上有人用 map 去解，就吸收起來，因為 map 中的鍵都是已經算過的數字，如果有找到該鍵表示相加等於目標，就能拿到其索引並回傳
 */

// var twoSum = function (nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const v = nums[i];
//     if (map[target - v] >= 0) {
//       return [map[target - v], i];
//     } else {
//       map[v] = i;
//     }
//   }
// };

// using es6 Map
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (map.get(target - v) >= 0) {
      return [map.get(target - v), i];
    } else {
      map.set(v, i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 11, 15], 9));
