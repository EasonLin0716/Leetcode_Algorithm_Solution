/**
 * @param {number[]} A
 * @return {number[]}
 */

/* 
https://leetcode.com/problems/sort-array-by-parity-ii/

解法:
1. 宣告偶數、奇數為0, 1作為陣列索引用；宣告result為空陣列
2. 迭代參數A，如果item為偶數就放入偶數索引；否則放入奇數索引
3. 將even或odd增加2，以便下次放入對的索引
4. 回傳result


*/

var sortArrayByParityII = function (A) {

  // 1. 宣告偶數、奇數為0, 1作為陣列索引用；宣告result為空陣列
  let result = []
  let odd = 1
  let even = 0
  // 2. 迭代參數A，如果item為偶數就放入偶數索引；否則放入奇數索引
  A.forEach(item => {
    if (item % 2 === 0) {
      result[even] = item
      // 3. 將even或odd增加2，以便下次放入對的索引
      even += 2
    } else {
      result[odd] = item
      odd += 2
    }
  })
  // 4. 回傳result
  return result
};

console.log(sortArrayByParityII([4, 2, 5, 7])) // output: [4, 5, 2, 7]