/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
解法:
1. 
*/
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
    }
  }
};


console.log(twoSum([2, 3, 4], 6)) // [1,3]