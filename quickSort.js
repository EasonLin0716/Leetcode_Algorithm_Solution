/*
步驟:
1. 在陣列中選擇中間索引作為(pivot)
2. 小於 pivot 的元素移到陣列 left; 大於 pivot 的元素移到陣列 right
3. 不斷重複直到所有子集只剩一個元素
*/

function quickSort(arr) {
  if (arr.length <= 1) return arr
  const pivotIndex = Math.floor(arr.length / 2)
  // 取得中間值並將其取出
  const pivot = arr.splice(pivotIndex, 1)[0]
  const [left, right] = [[], []]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
    if (arr[i] > pivot) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([12, 3, 43, 23, 87, 45])) // [ 3, 12, 23, 43, 45, 87 ]
