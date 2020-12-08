/**
 * @param {number[]} digits
 * @return {number[]}
 */
// https://leetcode.com/problems/plus-one/submissions/

var plusOne = function (arr) {
  if (!arr.length) return null;
  arr[arr.length - 1] += 1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === 10) {
      arr[i - 1] += 1;
      arr[i] = 0;
    }
  }
  if (arr[0] === 10) {
    arr[0] = 0;
    arr.unshift(1);
  }
  return arr;
};

/*
解法:
1. 判斷相加後是否需進位
2. 目前位數 = 目前位數+前面是否進位
3. digits個位數+1
4. 如果目前這個位數等於10(因為只+1，所以不會超過10)，進位
5. 最後如果有進位就放到索引0
*/

// var plusOne = function (digits) {
//   // 1. carry用來判斷相加後是否需進位
//   let carry = 0

//   for (let i = digits.length - 1; i >= 0; i--) {
//     // 2. 目前位數 = 目前位數+前面是否進位
//     digits[i] = digits[i] + carry

//     // 3. digits個位數+1
//     if (i === digits.length - 1) {
//       digits[i] = digits[i] + 1
//     }

//     // 4. 如果目前這個位數等於10(因為只+1，所以不會超過10)，進位
//     if (digits[i] === 10) {
//       digits[i] = 0
//       carry = 1
//     } else {
//       carry = 0
//     }
//   }

//   // 5. 最後如果有進位就放到索引0
//   if (carry == 1) {
//     digits.unshift(carry)
//   }

//   return digits
// }

console.log(plusOne([])); // output: null
console.log(plusOne([1, 9, 9])); // output: [2, 0, 0]
console.log(plusOne([9, 9])); // output: [1, 0, 0]
console.log(plusOne([4, 3, 2, 1])); // output: [4, 3, 2, 2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
