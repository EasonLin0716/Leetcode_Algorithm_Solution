/**
 * @param {string} s
 * @return {number}
 */

/*
https://leetcode.com/problems/length-of-last-word/

解法:
0. 去頭尾空白
1-1. 如果字串為空或不存在空白字元則回傳0
1-2. 如果字串不含空白則回傳字串長度
2. 由後往前迭代參數 s 並透過索引讀取字元
3. 如果碰到空白就回傳後一字元到最後一字的長度
*/

var lengthOfLastWord = function (s) {
  // 0. 去頭尾空白
  s = s.trim()
  // 1-1. 如果字串為空或不存在空白字元則回傳0
  if (!s.length || s === " ") return 0
  // 1-2. 如果字串不含空白則回傳字串長度
  if (s.indexOf(" ") === -1) return s.length
  // 2. 由後往前迭代參數 s 並透過索引讀取字元
  for (let i = s.length - 1; i >= 0; i--) {
    // 3. 如果碰到空白就回傳後一字元到最後一字的長度
    if (s[i] === " ") {
      return s.slice(i + 1, s.length).length
    }
  }
};

console.log(lengthOfLastWord('Hello')) // expected output: 5
console.log(lengthOfLastWord(' ')) // expected output: 0
console.log(lengthOfLastWord('Hello World')) // expected output: 5
console.log(lengthOfLastWord('a')) // expected output: 1
console.log(lengthOfLastWord(' a')) // expected output: 1
console.log(lengthOfLastWord('a ')) // expected output: 1