/**
 * @param {number[]} arr
 * @return {number}
 */
// var peakIndexInMountainArray = function (arr) {
//   let max = -Infinity
//   let ind = -1
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//       ind = i
//     }
//   }
//   return ind
// };

var peakIndexInMountainArray = function (arr) {
  let [left, right] = [0, arr.length - 1];
  while (left <= right) {
    const pivot = ((right + left) / 2) | 0;
    if (arr[pivot] > arr[pivot - 1] && arr[pivot] > arr[pivot + 1]) {
      return pivot;
    } else if (arr[pivot] < arr[pivot - 1]) {
      right = pivot;
    } else {
      left = pivot;
    }
  }
  return -1;
};

// var peakIndexInMountainArray = function (arr) {
//   var max = Math.max(...arr);
//   return arr.indexOf(max);
// };
