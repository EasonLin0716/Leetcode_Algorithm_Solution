/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/*
https://leetcode.com/problems/add-strings/

解法:
1. 設定 carry 作為進位用變數；len1 取 num1 的長度；len2 取 num2 的長度；result 為結果
2. 當 num1 或 num2 還沒跑完所有數字時：
  2-1. 將每位數相加並加上進位 carry
  2-2. 將結果取 10 餘數轉字串加上 result
  2-3. 將 sum / 10 無條件捨去判定是否有 carry
  2-4. 到下一位繼續運算
3. 若 carry 有值則最後在最左方加上 1
*/
var addStrings = function (num1, num2) {
  // 1. 設定 carry 作為進位用變數；len1 取 num1 的長度；len2 取 num2 的長度；result 為結果
  let carry = 0
  let len1 = num1.length
  let len2 = num2.length
  let result = ''
  // 2. 當 num1 或 num2 還沒跑完所有數字時：
  while (len1 > 0 || len2 > 0) {
    // 2-1. 將每位數相加並加上進位 carry
    let sum = (+num1[len1 - 1] || 0) + (+num2[len2 - 1] || 0) + carry
    // 2-2. 將結果取 10 餘數轉字串加上 result
    result = sum % 10 + '' + result
    // 2-3. 將 sum / 10 無條件捨去判定是否有 carry
    carry = Math.floor(sum / 10)
    // 2-4. 到下一位繼續運算
    len1--
    len2--
  }
  // 3. 若 carry 有值則最後在最左方加上 1
  if (carry) result = '1' + result
  return result
};
