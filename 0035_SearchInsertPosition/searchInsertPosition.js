/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* 
https://leetcode.com/problems/search-insert-position/

解法:
1. 用 indexOf 搜尋 target 是否存在陣列
2. 如果存在則回傳 indexOf 的輸出
3. 迭代 nums
4. 如果 target 比 nums[i] 小就 insert 在 nums[i] 前面
5. 避免陷入無窮迴圈故 i++ 跳過被 insert 的數字
6. 如果都沒有 insert 就表示該數字大於所有陣列會被放在最後一個，故直接回傳 nums.length(等於其索引)
7. 如果有 insert 就回傳搜尋的結果
*/


var searchInsert = function (nums, target) {
  // 1. 用 indexOf 搜尋 target 是否存在陣列
  // 2. 如果存在則回傳 indexOf 的輸出
  if (nums.indexOf(target) !== -1) return nums.indexOf(target)
  // 3. 迭代 nums
  for (let i = 0; i < nums.length; i++) {
    // 4. 如果 target 比 nums[i] 小就 insert 在 nums[i] 前面
    if (target < nums[i]) {
      nums.splice(i, 0, target)
      // 5. 避免陷入無窮迴圈故 i++ 跳過被 insert 的數字
      i++
    }
  }
  // 6. 如果都沒有 insert 就表示該數字大於所有陣列會被放在最後一個，故直接回傳 nums.length(等於其索引)
  if (nums.indexOf(target) === -1) return nums.length
  // 7. 如果有 insert 就回傳搜尋的結果
  return nums.indexOf(target)

};

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0