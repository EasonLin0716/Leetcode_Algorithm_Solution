// Given two arrays, write a function to compute their intersection.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   const ary = [];
//   for (let i = 0; i < nums1.length; i++) {
//     if (nums2.includes(nums1[i]) && !ary.includes(nums1[i])) {
//       ary.push(nums1[i]);
//     }
//   }
//   return ary;
// };

var intersection = function (nums1, nums2) {
  let map = new Map();
  for (let num of nums1) {
    if (!map.has(num)) map.set(num, 1);
  }

  return nums2.filter((n) => {
    if (map.has(n)) {
      map.delete(n);
      return true;
    } else return false;
  });
};
