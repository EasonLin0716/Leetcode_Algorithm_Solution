/**
 * @param {number} n
 * @return {boolean}
 */
/* 
解法:
1. 如果 n 為負數或浮點數回傳 false
2. 如果 n 為 1 回傳 true
3. 遍歷至 n 開根號，如果有相符就回傳 true
*/
var isPowerOfTwo = function(n) {
  if (n <= 0 || !Number.isSafeInteger(n)) return false
  if (n === 1) return true
  for (let i = 1; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (Math.pow(2, i) === n) return true
  }
  return false
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))
