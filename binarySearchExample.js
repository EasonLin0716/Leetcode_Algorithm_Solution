/*
步驟:
1. 宣告 low, high 為陣列中的索引 0 和最大值
2. 宣告 mid 為 low 及 high 的中間值
3. 如果 mid 比目標還大，則把最大值索引設定在 mid 索引的前一個索引值
4. 如果 mid 比目標還小，則把最小值索引設定在 mid 索引的後一個索引值
5. 如果 mid 索引的值既不大於 target 也不小於 target 則等於 target 便回傳其索引值
*/

function search(arr, target) {
  let [low, high] = [0, arr.length - 1]
  while (low <= high) {
    const mid = Math.ceil((low + high) / 2)
    if (arr[mid] > target) return (high = mid - 1)
    if (arr[mid] < target) return (low = mid + 1)
    break
  }
  return mid
}

console.log(search([5, 17, 33, 41, 55, 61, 80], 55)) // 4
console.log(search([5, 17, 33, 41, 45, 55, 61, 80], 55))
