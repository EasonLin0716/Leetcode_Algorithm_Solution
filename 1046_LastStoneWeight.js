// We have a collection of stones, each stone has a positive integer weight.
// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    const firstStoneIndex = stones.indexOf(Math.max(...stones));
    const firstStone = stones.splice(firstStoneIndex, 1);
    const secondStoneIndex = stones.indexOf(Math.max(...stones));
    const secondStone = stones.splice(secondStoneIndex, 1);
    stones.push(Math.abs(firstStone - secondStone));
  }
  return stones[0];
};

// 思路
// 當 stones 的長度大於 1 時
// 　取出最大數給 twoStones
// 　取出最大數給 twoStones
// 　計算 twoStones 的差取絕對值並推回 stones
// 回傳 stones[0]

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
