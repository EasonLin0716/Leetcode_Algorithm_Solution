/**
 * @param {string[]} strings
 * @return {string}
 */

/* 
https://leetcode.com/problems/longest-common-prefix/

解法: 
1. 檢查參數，若參數為空陣列則回傳''
2. 取第一個字串做為參考值 same
3. 宣告一個變數 sameWordNumber 用來存放相同字母數量
4. 迭代 strings 陣列，並取出每個字串
5. 比較其他陣列的字母，每當比較完就將 same 的值改為被比較字串重疊的字
*/

var longestCommonPrefix = function (strings) {
  let result = ''
  // 1. 檢查參數，若參數為空陣列則回傳''
  if (strings.length === 0 || !strings) return ''
  // 2. 取第一個字串做為參考值 same
  let same = strings[0]

  // 4. 迭代 strings 陣列，並取出每個字串
  for (let i = 1; i < strings.length; i++) {
    // 3. 宣告一個變數用來存放相同字母數量
    let comparedStr = strings[i]
    let sameWordNumbers = 0
    for (sameWordNumbers; sameWordNumbers < same.length; sameWordNumbers++) {
      if (same[sameWordNumbers] !== comparedStr[sameWordNumbers]) {
        break
      }
    }
    same = same.slice(0, sameWordNumbers)
  }

  return same

};

console.log(longestCommonPrefix(["flower", "flow", "flight"])) // expected output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // expected output: ""
console.log(longestCommonPrefix(["aaa", "aa", "aaa"])) // expected output: "aa"