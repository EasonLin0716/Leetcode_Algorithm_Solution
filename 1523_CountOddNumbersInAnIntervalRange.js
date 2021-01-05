/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if (high === 0) return 0;
  if (high - low === 1) return 1;
  if (high % 2 === 1 || low % 2 === 1) {
    return Math.floor((high - low) / 2) + 1;
  }
  return Math.floor((high - low) / 2);
};
