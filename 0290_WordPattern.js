/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  var ary = s.split(" ");
  if (pattern.length !== ary.length) return false;
  var map = {};
  var reverseMap = {};
  for (var i = 0; i < pattern.length; i++) {
    if (!map[pattern[i]] && !reverseMap[ary[i]]) {
      map[pattern[i]] = ary[i];
      reverseMap[ary[i]] = pattern[i];
    } else if (map[pattern[i]] !== ary[i] || reverseMap[ary[i]] !== pattern[i])
      return false;
  }
  return true;
};
