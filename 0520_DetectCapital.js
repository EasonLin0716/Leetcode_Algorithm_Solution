/**
 * @param {string} word
 * @return {boolean}
 */

/*
https://leetcode.com/problems/detect-capital/

解法:
1. word 是否等於 word 大寫?
2. word 是否等於 word 第一個字大寫後面小寫?
3. 其一為 true 就回傳 true
*/
var detectCapitalUse = function (word) {
  return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};