/**
 * @param {string} moves
 * @return {boolean}
 */

/*
https://leetcode.com/problems/robot-return-to-origin/

解法:
1. 宣告兩個變數 x, y 作為座標 (x, y)
2. 迭代傳入的字串
3. if R then x + 1, if L then x - 1, if U then y + 1, if D then y - 1
4. 檢查 x, y 是否為 0 
*/

var judgeCircle = function (moves) {
  // 1. 宣告兩個變數 x, y 作為座標 (x, y)
  let [x, y] = [0, 0]
  // 2. 迭代傳入的字串
  for (let i of moves) {
    // 3. if R then x + 1, if L then x - 1, if U then y + 1, if D then y - 1
    if (i === 'R') {
      x += 1
    }
    else if (i === 'L') {
      x -= 1
    }
    else if (i === 'U') {
      y += 1
    }
    else if (i === 'D') {
      y -= 1
    }
  }
  // 4. 檢查 x, y 是否為 0 
  return (x === 0 && y === 0)
};

console.log(judgeCircle('UD')) // true
console.log(judgeCircle('LL')) // false