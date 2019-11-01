/**
 * @param {number[]} nums
 * @return {number}
 */

/*
https://leetcode.com/problems/single-number/
1. 將 nums 排序
2. 迭代 nums
3. 如果數字重複就把重複的兩個都抽掉
4. 把 i 扣回來以便下次仍迭代到正確索引
5. 沒被抽掉的就是唯一一個數，回傳它
*/

var singleNumber = function (nums) {
  // 1. 將 nums 排序
  nums.sort();
  // 2. 迭代 nums
  for (var i = nums.length - 1; i > 0; i--) {
    // 3. 如果數字重複就把重複的兩個都抽掉
    if (nums[i] === nums[i - 1]) {
      nums.splice(i - 1, 2);
      // 4. 把 i 扣回來以便下次仍迭代到正確索引
      i--;
    }
  }
  // 5. 沒被抽掉的就是唯一一個數，回傳它
  return nums[0];
};

// ------------解法二------------
/*
https://leetcode.com/problems/single-number/
1. 宣告一個對照用雜湊 map
2. 迭代 nums
3. 累計 num 出現次數並存入 map
4. 迭代 map 出現次數為奇數就回傳

*/


// var singleNumber = function (nums) {
//   // 1. 宣告一個對照用雜湊 map
//   let map = {}
//   // 2. 迭代 nums
//   for (let num of nums) {
//     // 3. 累計 num 出現次數並存入 map
//     if (map[num]) {
//       map[num] += 1
//     } else {
//       map[num] = 1
//     }
//   }
//   // 4. 迭代 map 出現次數為奇數就回傳
//   for (let k in map) {
//     if (map[k] % 2 === 1) {
//       return k
//     }
//   }
// };

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4