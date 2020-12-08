var simplySubsets = function (s) {
  let result = "";
  const strList = s.split("\n");
  for (let i = 1; i <= strList.length / 2; i++) {
    const [left, right] = [strList[i * 2 - 2], strList[i * 2 - 1]];
    if (left === right) {
      result += "A equals B\n";
    } else if (left.includes(right) && !right.includes(left)) {
      result += "B is proper subset of A\n";
    } else if (!left.includes(right) && right.includes(left)) {
      result += "A is proper subset of B\n";
    } else {
      const [leftArr, rightArr] = [left.split(" "), right.split(" ")];
      let isConfused = false;
      for (let i = 0; i < rightArr.length; i++) {
        if (leftArr.includes(rightArr[i])) {
          result += "I'm confused!\n";
          isConfused = true;
          break;
        }
      }
      if (!isConfused) {
        result += "A and B are disjoint\n";
      }
    }
  }
  return result;
};

console.log(
  simplySubsets(
    `55 27
55 27
9 24 1995
9 24
1 2 3
1 2 3 4
1 2 3
4 5 6
1 2
2 3`
  )
);
