/**
 * @param {string} s
 * @return {string}
 */

/*
https://leetcode.com/problems/reverse-words-in-a-string-iii/

解法:
1. 將 s 依據空白拆成陣列
2. 將 s[i] 內的值轉為陣列翻轉後轉回字串傳入 s[i]
3. 迭代結束後回傳 s 轉字串
*/
var reverseWords = function (s) {
  // 1. 將 s 依據空白拆成陣列
  s = s.split(' ')
  for (let i = 0; i < s.length; i++) {
    // 2. 將 s[i] 內的值轉為陣列翻轉後轉回字串傳入 s[i]
    s[i] = s[i].split('').reverse().join('')
  }
  // 3. 迭代結束後回傳 s 轉字串
  return s.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"