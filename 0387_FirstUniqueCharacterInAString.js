// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const v = hashMap.get(s[i]);
    if (!v) {
      hashMap.set(s[i], 1);
      continue;
    }
    hashMap.set(s[i], v + 1);
  }
  const mapList = [...hashMap.entries()];
  for (let i = 0; i < mapList.length; i++) {
    if (mapList[i][1] === 1) return s.indexOf(mapList[i][0]);
  }
  return -1;
};

console.log(firstUniqChar("leetcode")); // 0

console.log(firstUniqChar("loveleetcode")); // 2

console.log(firstUniqChar("dddccdbba")); // 8
