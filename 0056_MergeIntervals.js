/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.

解法:
1. 陣列不一定會照起始數字大小給，因此要先排序
2. 迭代 intervals
3. 如果陣列A第二個數字大於陣列B兩個數字就直接把陣列B拉掉
4. 如果陣列A第二個數字大於陣列B第一個數字，就合併兩個陣列
*/

// var merge = function(intervals) {
//   intervals = intervals.sort((a, b) => a[0] - b[0])

//   for (let i = 0; i < intervals.length - 1; i++) {
//     if (
//       intervals[i][1] >= intervals[i + 1][0] &&
//       intervals[i][1] >= intervals[i + 1][1]
//     ) {
//       intervals.splice(i + 1, 1)
//       i -= 1
//     } else if (intervals[i][1] >= intervals[i + 1][0]) {
//       intervals[i][1] = intervals[i + 1][1]
//       intervals.splice(i + 1, 1)
//       i -= 1
//     }
//   }

//   return intervals
// }

// 如果 intervals 長度為 1 就直接回傳
// 依 intervals 中每個陣列第一個值排序
// 遍歷 intervals
//   如果被遍歷到的第一個值比上一個第二個值小
//     就取目前跟上一個的[0]小以及目前跟上一個[1]大
//     把上一個刪掉
//     陣列變短了所以 i -= 1
// 回傳 intervals
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]); //Arr have smaller element come first
  for (let i = 1; i < intervals.length; i++) {
    var curr = intervals[i];
    var prev = intervals[i - 1];
    if (curr[0] <= prev[1]) {
      intervals[i] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
      intervals.splice(i - 1, 1);
      i -= 1; // After merge, the arr become shorter
    }
  }
  return intervals;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
); // [[1, 4]]
