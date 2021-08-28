/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
    const pivot = Math.floor(left + (right - left) / 2);
    if (nums[pivot] === target) return pivot;
    else if (nums[pivot] > target) right = pivot - 1;
    else left = pivot + 1;
  }
  return -1;
};

//  [-1,0,3,5,9,12], target = 9
console.log(search([-1, 0, 3, 5, 9, 12], 9));
