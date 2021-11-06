/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  var hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) return nums[i];
    hashMap[nums[i]] = "1";
  }
};
