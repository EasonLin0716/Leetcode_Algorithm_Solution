/**
 * @param {number} n
 * @return {string}
 */

/*
The count-and-say sequence is the sequence of integers with the first five terms as following:
1. 1
2. 11
3. 21
4. 1211
5. 111221

https://leetcode.com/problems/count-and-say/

參考: https://www.youtube.com/watch?v=JQOGiecrsaQ

這題沒有規律性，沒辦法根據 n 的值配合一個算法解出，因此需要從 1 開始慢慢演算
*/

var countAndSay = function(n) {
  let result = '1'
  // 跳過起始階段
  n--
  while (n) {
    // 宣告 newString 空值，用以儲存 result 演算的結果
    let newString = ''
    // 宣告 i 為 0 作為 result 的索引
    let i = 0
    // 開始迭代 result
    while (i < result.length) {
      // 宣告 count 為 1，用來累加連續性的數字有幾個
      let count = 1
      // 當字串還沒被迭代完，並且目前數字與下一個數字相同時
      while (i + 1 < result.length && result[i] === result[i + 1]) {
        // 數到一個連續數字，count + 1, i + 1
        count++
        i++
      }
      // 下一個數字不連續時，就把 count 轉成字串並加上 result[i]，result[i] 會是目前連續數字的最後一個數
      newString += count.toString() + result[i]
      // 把索引+1避免重複算到連續數字
      i++
    }
    // 演算完畢，輸出目前結果
    result = newString
    // 將 n - 1 進入下一輪演算
    n--
  }
  // 演算完畢，輸出最終結果
  return result
}

console.log(countAndSay(1)) // 1
console.log(countAndSay(2))
console.log(countAndSay(5))
