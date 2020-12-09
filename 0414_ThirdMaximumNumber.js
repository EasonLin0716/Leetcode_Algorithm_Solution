/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

https://leetcode.com/problems/third-maximum-number/
*/

/*
解法
1. 將 nums 由大到小排序後存至 set (去掉多餘的數字)
2. 如果 nums 的長度等於 1 或 2 則回傳最大數
3. 若大於 2 則回傳索引 2 (第三大的數字)
*/
// var thirdMax = function (nums) {
//   nums = [...new Set(nums.sort((a, b) => b - a))];
//   if (nums.length <= 2) return nums[0];
//   return nums[2];
// };

/**
 * 排序>取出不重複數字>回傳第三大
 */
var thirdMax = function (nums) {
  nums = filterSameNumInArray(quickSort(nums));
  if (nums.length <= 2) return nums[0];
  return nums[2];
};

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  // 取得中間值並將其取出
  const pivot = arr.splice(pivotIndex, 1)[0];
  const [left, right] = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    }
    if (arr[i] < pivot) {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

function filterSameNumInArray(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(thirdMax([3, 2, 1])); // expected output: 1
console.log(thirdMax([1, 2])); // expected output: 1
console.log(thirdMax([2, 2, 3, 1])); // expected output: 1
