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
 * 「數獨」 的規則很簡單, 就是以1∼9九個數字把9×9方格裡的空格填滿, 1∼9的數字在每個直行、 橫列及每個小九宮格裡都只能出現一次。
 *
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
