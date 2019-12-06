/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
https://leetcode.com/problems/valid-anagram/submissions/
解法:
將字串排序後回傳是否相等
*/
var isAnagram = function(s, t) {
  s = s
    .split('')
    .sort()
    .join()
  t = t
    .split('')
    .sort()
    .join()
  return s === t
}

console.log(isAnagram('anagram', 'nagaram')) //true
console.log(isAnagram('rat', 'car')) //false
