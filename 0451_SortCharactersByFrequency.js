// Given a string, sort it in decreasing order based on the frequency of characters.
/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function (s) {
//   const hashMap = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const v = hashMap.get(char);
//     if (v) {
//       hashMap.set(char, v + 1);
//     } else {
//       hashMap.set(char, 1);
//     }
//   }
//   const sortedHashMap = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);
//   let result = "";
//   const list = [...sortedHashMap.entries()];
//   // list 會像這樣：[[0, ['t', 1]],...]
//   for (let i = 0; i < list.length; i++) {
//     for (let j = 0; j < list[i][1][1]; j++) {
//       result += list[i][1][0];
//     }
//   }
//   return result;
// };

// 思路
// 宣告一個 hashMap
// 遍歷 s
//   宣告 char 為 s[i]
//   如果 hashMap 的 key 中存在 char
//     把 key 的 value + 1
//   否則
//     增加一個 hashMap 的 key，值為 1
// 宣告 sortedHashMap 為 hashMap 的鍵排序後的 map
// 宣告空字串 result
// 遍歷 sortedHashMap
//   依照值的數量產出鍵
// 這題直覺就是用 es6 Map + hashMap 思維去解，也很順利的一次就通過，底下又寫了一個用 Object + hashMap 的版本，es6 Map 相較 Object 有個 entries() 可以很方便的轉為陣列來排序，但產出的 array 是三維的，使用記憶體相同速度差不多

var frequencySort = function (s) {
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const v = hashMap[char];
    if (v) {
      hashMap[char] += 1;
    } else {
      hashMap[char] = 1;
    }
  }
  const sortedHashMap = {};
  const list = [];
  for (const k in hashMap) {
    list.push([k, hashMap[k]]);
  }
  list.sort((a, b) => b[1] - a[1]);
  let result = "";
  // list 會像這樣：[ [ 'b', 2 ], [ 'A', 1 ], [ 'a', 1 ] ]
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i][1]; j++) {
      result += list[i][0];
    }
  }
  return result;
};

console.log(frequencySort("tree")); // eert
console.log(frequencySort("cccaaa")); // cccaaa
console.log(frequencySort("Aabb")); // bbAa
