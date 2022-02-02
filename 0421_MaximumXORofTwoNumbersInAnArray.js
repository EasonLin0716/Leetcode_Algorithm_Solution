var findMaximumXOR = function (nums) {
  let maxResult = 0;
  let mask = 0;
  // 2的31次方
  for (let i = 31; i >= 0; i--) {
    // 10000, 01000, 00100 ...
    mask = mask | (1 << i);
    const set = new Set();
    for (let num of nums) {
      // 只關注當下遍歷到的二進位位置
      set.add(num & mask);
    }
    // 10000, 11000, 11100 ... tmp 會一直疊加 (如果有符合的話)
    const tmp = maxResult | (1 << i);
    for (let prefix of set.keys()) {
      // tmp ^ prefix 為最大值，嘗試找出
      if (set.has(tmp ^ prefix)) {
        maxResult = tmp;
        break;
      }
    }
  }
  return maxResult;
};

findMaximumXOR([3, 10, 5, 25, 2, 8]);
