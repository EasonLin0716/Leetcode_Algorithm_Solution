/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 2] === num) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 2, 3, 3])); // 7
