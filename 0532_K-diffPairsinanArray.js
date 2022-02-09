/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findPairs = function (nums, k) {
//   /**
//    * Approach-1
//    *
//    */
//   let res = 0;
//   let hashMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const a = nums[i];
//       const b = nums[j];
//       if (Math.abs(b - a) === k && !hashMap[`${a},${b}`]) {
//         hashMap[`${a},${b}`] = 1;
//         hashMap[`${b},${a}`] = 1;
//         res++;
//       }
//     }
//   }
//   return res;
// };

var findPairs = function (nums, k) {
  /**
   * Approach-2:
   *
   */
  let res = 0;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i] + k;
    const idx = nums.indexOf(target);
    if (idx !== -1 && idx !== i && !map[`${nums[i]},${nums[idx]}`]) {
      res++;
      map[`${nums[i]},${nums[idx]}`] = 1;
      map[`${nums[idx]},${nums[i]}`] = 1;
    }
  }
  return res;
};

console.log(findPairs([3, 1, 4, 1, 5], 2));
