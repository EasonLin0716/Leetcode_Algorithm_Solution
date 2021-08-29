/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function (nums) {
//   const sorted = nums.sort();
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1]) return sorted[i];
//   }
// };
var findDuplicate = function (nums) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (dict[num]) return num;
    else dict[num] = 1;
  }
};

// Input: nums = [1,3,4,2,2]
// Output: 2
console.log(findDuplicate([1, 3, 4, 2, 2], 2));
