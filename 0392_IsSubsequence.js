/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // 雙指針
  if (t.length < s.length) return false;
  var sLen = s.length;
  var tLen = t.length;
  var sPointer = 0;
  var tPointer = 0;
  while (sPointer < sLen) {
    var target = s[sPointer];
    var char = t[tPointer];
    if (target === char) {
      tPointer++;
      sPointer++;
    } else {
      tPointer++;
    }
    if (tPointer > tLen) return false;
  }
  return true;
};

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
console.log(isSubsequence("abc", "ahbgdc")); //true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
console.log(isSubsequence("axc", "ahbgdc")); //false
