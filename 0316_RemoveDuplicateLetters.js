// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    // 如果堆疊中含有這個字則跳過下面程式碼繼續迴圈
    if (stack.indexOf(char) > -1) continue;
    while (
      // 當堆疊不為空
      stack.length > 0 &&
      // 堆疊最上層的字母順序比 s[i] 字母後面(z > a)
      stack[stack.length - 1] > char &&
      // s[i]~s[lastIndex] 中含有堆疊最上層字母且大於目前迭代的數字(後面仍然有此字母)
      s.indexOf(stack[stack.length - 1], i) > i
    ) {
      // 移除堆疊最上層
      stack.pop();
    }
    // 將字母加入堆疊
    stack.push(char);
  }
  return stack.join("");
};

// (整理自網站)
// 宣告一個堆疊
// 遍歷字串
//   宣告 s[i] 為 char
//   如果堆疊中含有這個字則跳過下面程式碼繼續迴圈
//   當堆疊不為空　且　當堆疊最上層的字母順序比 s[i] 字母後面(z > a)　且　s[i]~s[lastIndex] 中含有堆疊最上層字母且大於目前迭代的數字
//     移除堆疊最上層
//   將字母加入堆疊
// 回傳堆疊合併的字串
//
// 我覺得這題如果這樣想會好一點，用一個堆疊來存放字串，當堆疊最上層的字母順序比目前遍歷到的字母順序還大，而且後面還有該堆疊最上層的字母，就可以把堆疊最上層字母移除，因為之後還是可以拿後面的字母再把他放進來

console.log(removeDuplicateLetters("bcabc")); // a
console.log(removeDuplicateLetters("cbacdcbc")); // a
console.log(removeDuplicateLetters("ecbacba")); // ecba
