/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
https://leetcode.com/problems/pascals-triangle/

解法:
1. 找出規律
  1-1. 每一列的第一個值都是 1
  1-2. 每一列的第 n 個值都等於上一列第 n - 1 的值 + n 的值
  1-3. 如果上一列的第 n 個值不存在，即視為 0
2. 放入第一列
3. 循環 numRows
4. 宣告前一列
5. 宣告現在這列
6. 循環陣列
7. 將值存入陣列
8. 將值推進三角形
*/
var generate = function (numRows) {
  if (numRows == 0) return []

  // 2. 放入第一列
  let myTriangle = [[1]]
  // 3. 循環 numRows
  for (let i = 1; i < numRows; i++) {
    // 4. 宣告前一列
    let prevRow = myTriangle[i - 1]
    // 5. 宣告現在這列(1-1. 每一列的第一個值都是 1)
    let curRow = [1]
    // 6. 循環三角形
    for (let j = 1; j <= i; j++) {
      // 1-2. 每一列的第 n 個值都等於上一列第 n - 1 的值 + n 的值
      let pre = prevRow[j - 1]
      // 1-3. 如果上一列的第 n 個值不存在，即視為 0
      let cur = prevRow[j] ? prevRow[j] : 0
      // 7. 將值存入陣列
      curRow.push(pre + cur)
    }
    // 8. 將值推進三角形
    myTriangle.push(curRow)
  }

  return myTriangle
}

console.log(generate(5))