/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function (nums) {
//   var res = 0;
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j] && i < j) res++;
//     }
//   }
//   return res;
// };

// O(n)
var numIdenticalPairs = function (nums) {
    var res = 0;
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]
        if (map[num] !== undefined) {
            map[num]++;
            res += map[num];
        } else {
            map[num] = 0;
        }
    }
    return res;
};