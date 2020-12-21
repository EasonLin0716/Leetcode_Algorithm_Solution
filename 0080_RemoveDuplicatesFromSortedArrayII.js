/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 2] === num[i]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

// 思路：
// 遍歷 nums
//   如果 nums[i] 前前個等於 nums
//     就把他從陣列中移除，並把索引 -= 1
// 回傳 nums.length
// 80ms, 40.5MB

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 2, 3, 3])); // 7
