/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
https://leetcode.com/problems/merge-sorted-array/

解法:
1. 將 nums1 0 的部分取代為 nums2
2. 使用氣泡排序法進行排序:
  2-1. 迭代 nums1
  2-2. 如果現在的數字大於下一個數字就對調
  2-3. Loop
*/

var merge = function (nums1, m, nums2, n) {
  let index = 0
  // 1. 將 nums1 0 的部分取代為 nums2
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[index]
    index++
  }
  // 2. 使用氣泡排序法進行排序:
  // 2-1. 迭代 nums1
  for (var j = 0; j < nums1.length - 1; j++) {
    for (var k = j + 1; k < nums1.length; k++) {
      // 2-2. 如果現在的數字大於下一個數字就對調
      if (nums1[j] > nums1[k]) {
        var temp = nums1[j];
        nums1[j] = nums1[k];
        nums1[k] = temp;
        // 2-3. Loop
      }
    }
  }
  return nums1
};


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1, 2, 2, 3, 5, 6]