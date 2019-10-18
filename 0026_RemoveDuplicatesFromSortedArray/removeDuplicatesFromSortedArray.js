/**
 * @param {number[]} nums
 * @return {number}
 */

/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/

不能建立新的陣列

解法：
1. 如果 nums 為空值或長度為 0 則回傳 0
2. 如果 nums 長度為 1 則回傳 1
3. 宣告一個變數 count 用來計算陣列 nums 長度
4. 迭代陣列 nums ，如果 count 索引到 nums[i] 的值不相等，則 count+1 並且 count+1 索引到的值等於 nums[i] 的值
5. 迭代結束後回傳 count+1

*/

var removeDuplicates = function (nums) {
  // 1. 如果 nums 為空值或長度為 0 則回傳 0
  if (nums.length === 0 || nums === null) return 0
  // 2. 如果 nums 長度為 1 則回傳 1
  if (nums.length === 1) return 1
  // 3. 宣告一個變數 count 用來計算陣列 nums 長度
  let count = 0
  // 4. 迭代陣列 nums ，如果 count 索引到 nums[i] 的值不相等，則 count+1 並且 count+1 索引到的值等於 nums[i] 的值
  for (let i = 0; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count += 1
      nums[count] = nums[i]
    }
  }
  // 5. 迭代結束後回傳 count+1
  return count += 1
};

console.log(removeDuplicates([1, 1, 2])) // expected output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // expected output: 5