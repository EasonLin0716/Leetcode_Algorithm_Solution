var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const mid = Math.floor((len + 1) / 2);
  const smallList = nums.splice(0, mid);
  const bigList = nums.splice(0, nums.length);
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      nums[i] = smallList.pop();
    } else {
      nums[i] = bigList.pop();
    }
  }
  return nums;
};
console.log(wiggleSort([1, 5, 1, 1, 6, 4]));
console.log(wiggleSort([1, 5, 1, 1, 6, 4, 1, 7]));
// console.log(wiggleSort([1, 3, 2, 2, 3, 1]));
// console.log(wiggleSort([1, 1, 2, 2, 1, 1, 2]));
console.log(wiggleSort([1, 2, 1, 2, 1, 1, 2, 2, 1]));
