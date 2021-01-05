// Given an integer array arr of distinct integers and an integer k.
// A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0 and the smaller integer moves to the end of the array. The game ends when an integer wins k consecutive rounds.
// Return the integer which will win the game.
// It is guaranteed that there will be a winner of the game.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// var getWinner = function (arr, k) {
//   if (arr.length === 2 || k > arr.length) return Math.max(...arr);
//   let count = 0;
//   while (count !== k) {
//     if (arr[0] > arr[1]) {
//       count += 1;
//       const tmp = arr[1];
//       for (let i = 1; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//       }
//       arr[arr.length - 1] = tmp;
//     } else {
//       count = 1;
//       arr.push(arr[0]);
//       arr.shift();
//     }
//   }
//   return arr[0];
// };

var getWinner = function (arr, k) {
  let i = 1,
    winner = arr[0],
    winCount = 0;
  while (i < arr.length && winCount < k) {
    if (winner < arr[i]) {
      winner = arr[i];
      winCount = 1;
    } else {
      winCount++;
    }
    i++;
  }

  return winner;
};

// 如果 k > 陣列長度，勝者必定為陣列中最大的數字（因為只有他有機會贏到 k 次）
console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2)); // 5
console.log(getWinner([1, 25, 35, 42, 68, 70], 2));
