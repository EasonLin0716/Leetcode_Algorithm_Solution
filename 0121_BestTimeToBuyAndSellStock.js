/**
 * @param {number[]} prices
 * @return {number}
 */

/*
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.
解法:
1. 將買進價設為最高數字
2. 將收益設為 0
3. 遍歷 prices 如果買進價大於當天價格則取當天價格
4. 計算當天價格扣除買進價，如果比收益大就覆蓋收益
5. 遍歷結束，回傳收益 
 */
var maxProfit = function(prices) {
  let buy = Number.MAX_SAFE_INTEGER
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i]
    }
    let nowProfit = prices[i] - buy
    if (nowProfit > profit) {
      profit = nowProfit
    }
  }
  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([[7, 6, 4, 3, 1]])) // 0
