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
// var isAnagram = function(s, t) {
//   s = s
//     .split('')
//     .sort()
//     .join()
//   t = t
//     .split('')
//     .sort()
//     .join()
//   return s === t
// }

var isAnagram = function (s, t) {
  var hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const v = hashMap.get(char);
    if (v) {
      hashMap.set(char, v + 1);
    } else {
      hashMap.set(char, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const v = hashMap.get(char);
    if (!v) return false;
    hashMap.set(char, v - 1);
  }
  let result = true;
  hashMap.forEach((v) => {
    if (v > 0) return (result = false);
  });
  return result;
};

// var isAnagram = function (s, t) {
//   let sl = s.length;
//   let tl = t.length;
//   if (sl !== tl) return false;

//   for (let i = 0; i < sl; i++) {
//     const char = s[i];
//     if (!t.includes(char)) return false;
//     t = t.replace(char, "");
//   }
//   return true;
// };

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
console.log(isAnagram("ap", "a")); //false
