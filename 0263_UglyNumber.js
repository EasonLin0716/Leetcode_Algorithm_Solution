/**
 * @param {number} num
 * @return {boolean}
 */
/*
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
解法:
1. 先判斷掉負數、0及6以下的數字
2. 當數字大於 2 時，將數字不斷除以 2 直到無法被 2 整除
3. 當數字大於 3 時，將數字不斷除以 3 直到無法被 3 整除
4. 當數字大於 5 時，將數字不斷除以 5 直到無法被 5 整除
5. 完畢後若該數字會等於 2, 3 或 5 若能被其中一個整除就是 ugly number
*/
var isUgly = function(num) {
  if (num <= 0) return false
  if (num <= 6) return true
  while (num > 2) {
    if (num % 2 !== 0) {
      break
    }
    num = parseInt(num / 2)
  }
  while (num > 3) {
    if (num % 3 !== 0) {
      break
    }
    num = parseInt(num / 3)
  }
  while (num > 5) {
    if (num % 5 !== 0) {
      break
    }
    num = parseInt(num / 5)
  }
  return num % 2 === 0 || num % 3 === 0 || num % 5 === 0
}
