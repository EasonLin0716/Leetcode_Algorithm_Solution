/**
 * @param {number} x
 * @return {boolean}
 */

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Could you solve it without converting the integer to a string?

/* 
https://leetcode.com/problems/palindrome-number/ 
solution:
1. return false if num is negative
2. store x's original value to variable origin
3. result will add x's last number every while loop until x === 0
4. compare x to reverted x
*/

var isPalindrome = function (x) {
  // 1. return false if num is negative
  if (x < 0) return false
  let result = 0
  // 2. store x's original value to variable origin
  let origin = x
  // 3. result will add x's last number every while loop until x === 0
  while (x != 0) {
    result = result * 10 + x % 10
    x = parseInt(x / 10)
  }
  // 4. compare x to reverted x
  return result === origin
};

console.log(isPalindrome(121)) // expected output: true
console.log(isPalindrome(-121)) // expected output: false
console.log(isPalindrome(10)) // expected output: false