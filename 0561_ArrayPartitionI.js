/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  var sorted = nums.sort((a, b) => a - b);
  // pairing
  var pairs = [];
  for (let i = 0; i < sorted.length; i += 2) {
    pairs.push([sorted[i], sorted[i + 1]]);
  }
  // [[a, b], [c, d]] ...
  var sum = 0;
  for (let i = 0; i < pairs.length; i++) {
    sum += pairs[i][0];
  }
  return sum;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9
