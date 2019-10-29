/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/*
https://leetcode.com/problems/reverse-string/

解法:
(不使用.reverse())
1. 宣告一個 count 做為執行次數
2. 宣告一個 lastIndex 作為交換值用
3. 迭代 s 直到第 s.length / 2 的索引
4. 將 左邊(s[i]) 的值存在 tmp
5. 將 右邊(s[lastIndex-i]) 的值覆蓋左邊
6. 將 tmp 覆蓋右邊
*/


var reverseString = function (s) {
  // 1. 宣告一個 count 做為執行次數
  let count = Math.floor(s.length / 2)
  // 2. 宣告一個 lastIndex 作為交換值用
  let lastIndex = s.length - 1
  // 3. 迭代 s 直到第 s.length / 2 的索引
  for (let i = 0; i < count; i++) {
    // 4. 將 左邊(s[i]) 的值存在 tmp
    let tmp = s[i]
    // 5. 將 右邊(s[lastIndex-i]) 的值覆蓋左邊
    s[i] = s[lastIndex - i]
    // 6. 將 tmp 覆蓋右邊
    s[lastIndex - i] = tmp
  }
  return s
}

console.log(reverseString(["h", "e", "l", "l", "o"])) // ["o","l","l","e","h"]

// var reverseString = function (s) {
//   return s.reverse()
// };