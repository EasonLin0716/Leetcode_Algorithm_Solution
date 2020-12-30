// Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
// Here are the rules of Tic-Tac-Toe:
// Players take turns placing characters into empty squares (" ").
// The first player A always places "X" characters, while the second player B always places "O" characters.
// "X" and "O" characters are always placed into empty squares, never on filled ones.
// The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.
// Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".
// You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.
// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  if (moves.length < 5) return "Pending";
  var gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (let i = 0; i < moves.length; i++) {
    var [c, r] = moves[i];
    gameBoard[c][r] = i % 2 === 0 ? "A" : "B";
  }

  for (let i = 0; i < gameBoard.length; i++) {
    if (
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][0] === gameBoard[i][2]
    )
      return gameBoard[i][0] || "Pending";
    if (
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[0][i] === gameBoard[2][i]
    )
      return gameBoard[0][i] || "Pending";
  }
  if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[0][0] === gameBoard[2][2]
  )
    return gameBoard[0][0] || "Pending";
  if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[0][2] === gameBoard[2][0]
  )
    return gameBoard[0][2] || "Pending";
  if (moves.length < 9) return "Pending";

  return "Draw";
};

// 當陣列長度不大於 5 時，表示勝負必定未分
// 陣列必定不會大於 9
// A 必定先，因此 index 為偶數的為 A 的步
// 00 01 02
// 10 11 12
// 20 21 22
//
// 宣告一個 gameBoard [['', '', ''], ['', '', ''], ['', '', '']]
// 遍歷 moves
// 拆解出 [column, row]
// 依照 move 寫入 gameBoard
// 判定勝負
// 如果陣列中三個值相等則回傳勝方
// 如果三個陣列同索引相等則回傳勝方
// 如果 [0][0] === [1][1] === [2][2] 或 [0][2] === [1][1] === [2][0] 則回傳勝方
// 如果拿到的是空字串，空格不屬於任何A或B的步，因此回傳 Pending

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
); // "A"

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
); // "B"

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
); // "Draw"

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
  ])
); // "Pending"

console.log(
  tictactoe([
    [1, 2],
    [0, 2],
    [0, 0],
    [1, 0],
    [2, 0],
  ])
); // "Pending"
