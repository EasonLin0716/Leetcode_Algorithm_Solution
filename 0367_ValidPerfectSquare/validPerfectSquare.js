/**
 * @param {number} num
 * @return {boolean}
 */

/* 
https://leetcode.com/problems/valid-perfect-square/submissions/

解法:
使用 Binary Search--
1. 設定 left 為 1, right 為 num
2. 當 left 小於等於 right 時執行以下動作：
  2-1. 設定中間數 mid 為 left + right / 2
  2-2. 設定暫存數 tmp 為 mid * mid
  2-3. 如果 num 等於 tmp 則回傳 true
  2-4. 如果 tmp > num 表示太大所以往左邊搜索
  2-5. 如果 tmp < num 表示太小所以往右邊搜索
3. 如果 r < l 表示不存在，回傳 false
*/

var isPerfectSquare = function (num) {
  if (num === 1) return true
  // 1. 設定 left 為 1, right 為 num
  let [left, right] = [1, num]
  // 2. 當 left 小於等於 right 時執行以下動作：
  while (left <= right) {
    // 2-1. 設定中間數 mid 為 left + right / 2
    let mid = Math.floor((left + right) / 2)
    // 2-2. 設定暫存數 tmp 為 mid * mid
    let tmp = mid * mid
    // 2-3. 如果 num 等於 tmp 則回傳 true
    if (num === tmp) {
      return true
      // 2-4. 如果 tmp > num 表示太大所以往左邊搜索
    } else if (tmp > num) {
      right = mid - 1
      // 2-5. 如果 tmp < num 表示太小所以往右邊搜索
    } else {
      left = mid + 1
    }
  }
  // 3. 如果 r < l 表示不存在，回傳 false
  return false
};

console.log(isPerfectSquare(16)) // true
console.log(isPerfectSquare(14)) // false