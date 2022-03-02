/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    // 雙指針
    if (t.length < s.length) return false;
    var sLen = s.length; var tLen = t.length;
    var sPointer = 0; var tPointer = 0;
    while (sPointer < sLen && tPointer < tLen) {
        var char = t.charAt(tPointer);
        var target = s.charAt(sPointer);
        if (char === target) {
            sPointer++;
            tPointer++;
        } else {
            tPointer++;
        }
    }
    return true;
};