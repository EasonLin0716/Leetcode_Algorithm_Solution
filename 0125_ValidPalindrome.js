/**
 * @param {string} s
 * @return {boolean}
 */

/* 
https://leetcode.com/problems/valid-palindrome/

解法
1. 如果字串是空值就回傳true(題目要求)
2. 轉小寫並用regex將非字母及數字的字過濾掉
3. 回傳與相反值是否相同
*/


var isPalindrome = function (s) {
  // 1. 如果字串是空值就回傳true(題目要求)
  if (s.length === 0) return true
  // 2. 轉小寫並用regex將非字母及數字的字過濾掉
  let result = s.toLowerCase().replace(/[^a-z0-9]/ig, '')
  // 3. 回傳與相反值是否相同
  return result === result.split('').reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // expected output: true
console.log(isPalindrome("race a car")) // expected output: false
console.log(isPalindrome("0P"))