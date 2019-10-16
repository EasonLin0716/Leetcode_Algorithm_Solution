/**
 * @param {string} s
 * @return {number}
 */

/* 
https://leetcode.com/problems/roman-to-integer/ 

特殊的羅馬數字 (e.g. IV:4, CM:900) 有個共通點 -- I(1) 比 V(5) 小; C(100) 比 M(1000) 小, 我們可以利用這個特性來解題

解法:
1. 列出羅馬數字
2. 迭代並利用字串索引逐一比較
3. 如果前面的字比後面大，就儲存至 result
4. 如果前面的字比後面小，就相減並儲存至 result

*/

var romanToInt = function (s) {

  let result = 0

  // 1. 列出羅馬數字
  let romans = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  // 2. 迭代並利用字串索引逐一比較
  for (let i = 0; i < s.length; i++) {
    let num1 = romans[s[i]]
    let num2 = romans[s[i + 1]]
    // 3. 如果前面的字比後面大，就儲存至 result
    if (num1 < num2) {
      result += (num2 - num1)
      i++
    } else {
      // 4. 如果前面的字比後面小，就相減並儲存至 result
      result += num1
    }
  }


  return result
}

console.log(romanToInt('III')) // expected output: 3
console.log(romanToInt('IV')) // expected output: 4
console.log(romanToInt('IX')) // expected output: 9
console.log(romanToInt('LVIII')) // expected output: 58
console.log(romanToInt('MCMXCIV')) // expected output: 1994