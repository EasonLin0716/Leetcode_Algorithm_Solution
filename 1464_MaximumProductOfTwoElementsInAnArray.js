// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length < 3) return (nums[0] - 1) * (nums[1] - 1);
  const ary = [-Infinity, -Infinity];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= ary[0]) {
      ary[1] = ary[0];
      ary[0] = nums[i];
    } else if (nums[i] >= ary[1]) {
      ary[1] = nums[i];
    }
  }
  return (ary[0] - 1) * (ary[1] - 1);
};

console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
console.log(maxProduct([10, 1, 8, 4, 7, 7, 3, 6])); // 63
