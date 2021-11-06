/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 2);
      i -= 1;
    }
  }
  return nums;
};

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
