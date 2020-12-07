/**
 * 每組測試資料請輸出F個波，每個波振幅的水平高度為A
 * @param {string} s
 *
 */
function triangleWave(s) {
  let result = "";
  const [pairNum, ...ary] = s.replace(/\s/gi, "").split("");
  for (let i = 1; i <= +pairNum; i++) {
    const [A, F] = [+ary[i * 2 - 2], +ary[i * 2 - 1]];
    let T = "";
    for (let j = 1; j <= A; j++) {
      for (let k = 1; k <= j; k++) {
        T += j;
      }
      T += "\n";
    }
    for (let l = A - 1; l >= 1; l--) {
      for (let m = l; m >= 1; m--) {
        T += l;
      }
      T += "\n";
    }
    for (let n = 1; n <= F; n++) {
      result += `\n${T}`;
    }
  }
  return result;
}

console.log(
  triangleWave(`2

3
2

5
3`)
);
