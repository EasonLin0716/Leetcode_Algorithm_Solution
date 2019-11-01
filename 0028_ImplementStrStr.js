/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/* 
https://leetcode.com/problems/implement-strstr/

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

解法:
1. 如果needle是空字串則回傳0
2. 回傳indexOf
*/


var strStr = function (haystack, needle) {
  if (needle === '') return 0
  return haystack.indexOf(needle)
};

console.log(strStr("hello", "ll"))