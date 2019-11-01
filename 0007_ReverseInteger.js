/* 
https://leetcode.com/problems/reverse-integer/
solution:
step 1: check if int is negative
step 2: abs ,then transfer integer into string
step 3: transfer string into array, reverse and transfer into string and transfer into number
step 4: return strArr * isNegative

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var reverse = function (int) {
  // step 1: check if int is negative
  let isNegative = int < 0 ? -1 : 1
  // step 2: transfer integer into string
  let str = `${Math.abs(int)}`
  // step 3: transfer string into array, reverse and transfer into string and transfer into number
  let result = +(str.split('').reverse().join(''))
  // handling note
  if (result > 2147483647 || result < -2147483648) return 0
  // step 4: return strArr * isNegative
  return result * isNegative
}

console.log(reverse(123)) // expected output: 321
console.log(reverse(-123)) // expected output: -321
console.log(reverse(120)) // expected output: 21
console.log(reverse(1534236469)) // expected output: 0