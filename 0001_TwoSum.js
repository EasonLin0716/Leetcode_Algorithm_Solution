/*
https://leetcode.com/problems/two-sum/submissions/
solution:
1. iterate numbers in the array
2. try every combination of each number
3. once there's an answer, return it

*/

var twoSum = function (nums, target) {
  // 1. iterate numbers in the array
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 2. try every combination of each number
      if (nums[i] + nums[j] === target) {
        // 3. once there's an answer, return it
        return [i, j]
      }
    }
  }
};