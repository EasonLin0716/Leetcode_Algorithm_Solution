// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let matches = 0;
  const stack = [];

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (top !== undefined && top !== s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (stack.length === 0) {
      matches += 1;
    }
  }

  return matches;
};

// match 是配合到的組數
// stack 是每次的堆疊
// 先將加入第一個字
// 遍歷字串
//     如果堆疊有東西，且最上面不等於下一個
//     　　移除最上方的值
//     否則加入堆疊
//     如果堆疊為 0，表示前後剛好抵銷了為一組，配合數 + 1

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("LLLLRRRR"));
