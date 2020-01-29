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

var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length - 1; i++) {
    if (
      intervals[i][1] >= intervals[i + 1][0] &&
      intervals[i][1] >= intervals[i + 1][1]
    ) {
      intervals.splice(i + 1, 1)
      i -= 1
    } else if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i][1] = intervals[i + 1][1]
      intervals.splice(i + 1, 1)
      i -= 1
    }
  }

  return intervals
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
) // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5]
  ])
) // [[1,5]]
console.log(
  merge([
    [1, 4],
    [2, 3]
  ])
) // [[1, 4]]
