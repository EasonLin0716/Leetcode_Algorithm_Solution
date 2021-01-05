// Given two arrays, write a function to compute their intersection.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const ary = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !ary.includes(nums1[i])) {
      ary.push(nums1[i]);
    }
  }
  return ary;
};
