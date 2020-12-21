/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let rowHashMap = {};
    let colHashMap = {};
    let boxHashMap = {};
    for (let j = 0; j < 9; j++) {
      const rowVal = board[i][j];
      if (rowVal !== ".") {
        if (rowHashMap[rowVal]) return false;
        rowHashMap[rowVal] = 1;
      }
      const colVal = board[j][i];
      if (colVal !== ".") {
        if (colHashMap[colVal]) return false;
        colHashMap[colVal] = 1;
      }
      const boxVal =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (boxVal !== ".") {
        if (boxHashMap[boxVal]) return false;
        boxHashMap[boxVal] = 1;
      }
    }
  }
  return true;
};

/**
 * (整理自網路的)
 * i = 0 j = 0, 1, 2, 3 ... 8
 * i = 1 j = 0, 1, 2, 3 ... 8
 * i = 2 j = 0, 1, 2, 3 ... 8
 * ...
 * 判定是否為數獨的方法: 橫向不得有重複數字、直向不得有重複數字、九宮格內不得有重複數字
 * 使用雙層迴圈
 * 橫向可以是 board[i][j] board[0][0] 為 5; board[0][1] 為 3 ...
 * 每當 i 增加時代表移動到了下一個橫向，在每層 i 都宣告一個 rowHashMap
 * 如果值不為 . 就存入 rowHashMap，如果值存在，表示它在某一橫向有重複數字，回傳 false
 *
 * 直向可以是 board[j][i] board[0][0] 為 5; board[1][0] 為 6 ...
 * 每當 i 增加時代表移動到了下一個直向，在每層 i 都宣告一個 colHashMap
 * 如果值不為 . 就存入 colHashMap，如果值存在，表示它在某一直向有重複數字，回傳 false
 *
 * 九宮格如下
 * [0,0] [0,1] [0,2] | [0,3] [0,4] [0,5] | [0,6] [0,7] [0,8]
 * [1,0] [1,1] [1,2] | [1,3] [1,4] [1,5] | [1,6] [1,7] [1,8]
 * [2,0] [2,1] [2,2] | [2,3] [2,4] [2,5] | [2,6] [2,7] [2,8]
 * ---------------------------------------------------------
 * [3,0] [3,1] [3,2] | [3,3] [3,4] [3,5] | [3,6] [3,7] [3,8]
 * [4,0] [4,1] [4,2] | [4,3] [4,4] [4,5] | [4,6] [4,7] [4,8]
 * [5,0] [5,1] [5,2] | [5,3] [5,4] [5,5] | [5,6] [5,7] [5,8]
 * ---------------------------------------------------------
 * [6,0] [6,1] [6,2] | [6,3] [6,4] [6,5] | [6,6] [6,7] [6,8]
 * [7,0] [7,1] [7,2] | [7,3] [7,4] [7,5] | [7,6] [7,7] [7,8]
 * [8,0] [8,1] [8,2] | [8,3] [8,4] [8,5] | [8,6] [8,7] [8,8]
 *
 * i = 0, j = 0, 1, 2, 3, 4, 5, 6, 7, 8
 * 分別要帶    00 01 02 10 11 12 20 21 22
 * i = 1, j = 0, 1, 2, 3, 4, 5, 6, 7, 8
 * 分別要帶    03 04 05 13 14 15 23 24 25
 * i = 2, j = 0, 1, 2, 3, 4, 5, 6, 7, 8
 * 分別要帶    06 07 08 16 17 18 26 27 28
 * i = 3, j = 0, 1, 2, 3, 4, 5, 6, 7, 8
 * 分別要帶    30 31 32 40 41 42 50 51 52
 * i = 6, j = 0, 1, 2, 3, 4, 5, 6, 7, 8
 * 分別要帶    60 61 62 70 71 72 80 81 82
 *
 * [3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
 *  i 會逐漸增加, j 會固定循環                     i 會逐漸增加, j 會固定循環
 */

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // true

// console.log(
//   isValidSudoku([
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// ); // false
