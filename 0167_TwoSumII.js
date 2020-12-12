/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}}
 */

// 解法：
// 宣告頭為最前面的索引
// 尾巴為最後面的索引
// 從 0 遍歷到尾巴
// 　　將總和宣告為頭值+尾值
// 　　如果相等於 target
// 　　　　就回傳頭+1 尾+1 (比照題目需求)
// 　　如果總和大於目標
// 　　　　表示其中一個數字太大，以已排序陣列來看必定是尾，所以尾向前走
//　　　　 i 需要扣掉 1，因為這邊把 i 當成了頭
// 　　如果總和小於目標
// 　　　　反推上一個條件，故頭向後走

// var twoSum = function (numbers, target) {
//   let head = 0;
//   let tail = numbers.length - 1;
//   for (let i = 0; i < tail; i++) {
//     let sum = numbers[head] + numbers[tail];
//     if (sum === target) {
//       return [head + 1, tail + 1];
//     } else if (sum > target) {
//       tail -= 1;
//       i--;
//     } else {
//       head += 1;
//     }
//   }
// };

// 解法：
// 宣告頭為最前面的索引
// 尾巴為最後面的索引
// 當頭不等於尾時持續進行
// 　　將總和宣告為頭值+尾值
// 　　如果相等於 target
// 　　　　就回傳頭+1 尾+1 (比照題目需求)
// 　　如果總和大於目標
// 　　　　表示其中一個數字太大，以已排序陣列來看必定是尾，所以尾向前走
// 　　如果總和小於目標
// 　　　　反推上一個條件，故頭向後走
var twoSum = function (numbers, target) {
  let head = 0;
  let tail = numbers.length - 1;
  while (head !== tail) {
    let sum = numbers[head] + numbers[tail];
    if (sum === target) {
      return [head + 1, tail + 1];
    } else if (sum > target) {
      tail -= 1;
    } else {
      head += 1;
    }
  }
};

// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
// };

console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([2, 7, 11, 15], 9)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,3]
console.log(twoSum([5, 25, 75], 100));
