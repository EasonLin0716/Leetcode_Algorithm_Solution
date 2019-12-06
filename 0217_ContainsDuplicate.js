/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* https://leetcode.com/problems/contains-duplicate/submissions/
解法:
1. 排序
2. 遍歷 nums 
3. 如果該索引的值等於下一個索引的值直接回傳 true
4. 都沒有則回傳 false
*/
var containsDuplicate = function(nums) {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true
  }
  return false
}

/* 另一解: 運用集合的特性(不儲存重複的值)
var containsDuplicate = function(nums) {
  return (new Set(nums).size !== nums.length)
}
*/

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true
