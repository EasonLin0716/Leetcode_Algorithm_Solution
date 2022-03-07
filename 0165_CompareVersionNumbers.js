/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  var V1Ary = version1.split(".");
  var V2Ary = version2.split(".");
  var max = Math.max(V1Ary.length, V2Ary.length);
  for (var i = 0; i < max; i++) {
    var V1 = +V1Ary[i] || 0,
      V2 = +V2Ary[i] || 0;
    if (V1 !== V2) {
      if (V1 > V2) return 1;
      else return -1;
    }
  }
  return 0;
};
