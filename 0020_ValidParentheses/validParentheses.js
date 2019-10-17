/**
 * @param {string} s
 * @return {boolean}
 */

/*
https://leetcode.com/problems/valid-parentheses/

解法：
1. 宣告一個存放比較括號用的 stack
2. 宣告對照用的 left, right, match
3. 迭代傳入的陣列，取出每個字 i
4. 如果 i 存在於 left 就存進 stack
5. 如果 i 存在於 right 就把 stack 中原本透過 4. 存的值抽掉
6. 抽掉的值如果不等於 match 對照表的話就表示括號不符規律回傳 false
7. 迭代結束後 stack 應該要是空的
*/


var isValid = function (s) {
  // 1. 宣告一個存放比較括號用的 stack
  const stack = [];
  // 2. 宣告對照用的 left, right, match
  const left = ['(', '[', '{'];
  const right = [')', ']', '}'];
  const match = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  // 3. 迭代傳入的陣列，取出每個字 i
  for (let i of s) {
    // 4. 如果 i 存在於 left 就存進 stack
    if (left.indexOf(i) > -1) {
      stack.push(i)
    }

    // 5. 如果 i 存在於 right 就把 stack 中原本透過 4. 存的值抽掉
    if (right.indexOf(i) > -1) {
      let stackStr = stack.pop()
      // 6. 抽掉的值如果不等於 match 對照表的話就表示括號不符規律回傳 false
      if (match[i] !== stackStr) {
        return false
      }
    }
  }
  // 7. 迭代結束後 stack 應該要是空的
  return stack.length == 0
};


console.log(isValid("()")) // expected output: true
console.log(isValid("()[]{}")) // expected output: true
console.log(isValid("(]")) // expected output: false
console.log(isValid("([)]")) // expected output: false
console.log(isValid("{[]}")) // expected output: true