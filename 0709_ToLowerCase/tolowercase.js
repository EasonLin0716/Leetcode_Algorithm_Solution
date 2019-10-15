/**
 * @param {string} str
 * @return {string}
 */

/* 
https://leetcode.com/problems/to-lower-case/
Use unicode to solve this problem.
Solution:
1. Transfer string into arr
2. forEach arr and use charCodeAt() transfer into unicode
3. Transfer every letter into unicode
4. Lower the case
  4-1. Only if  unicode is >= 65 and <= 90 (ref: https://en.wikipedia.org/wiki/List_of_Unicode_characters)

*/

var toLowerCase = function (str) {
  // 1. Transfer string into arr
  let strArr = str.split('')
  let arr = []
  let result = ''
  // 2. forEach arr and use charCodeAt() transfer into unicode
  strArr.forEach(el => {
    // 3. Transfer every letter into unicode
    let unicode = el.charCodeAt()
    let lowercase = String.fromCharCode(unicode)
    // 4-1. Only if  unicode is >= 65 and <= 90 (ref: https://en.wikipedia.org/wiki/List_of_Unicode_characters)
    if (unicode >= 65 && unicode <= 90) {
      // 4. Lower the case
      lowercase = String.fromCharCode(unicode + 32)
    }
    arr.push(lowercase)
  })
  result = arr.join('')
  return result
};

console.log(toLowerCase('APPLE')) // expected output: apple
console.log(toLowerCase('here')) // expected output: here
console.log(toLowerCase('Hello')) // expected output: hello