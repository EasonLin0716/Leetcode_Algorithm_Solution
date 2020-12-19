/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const v = Math.abs(nums[i]) - 1;
    nums[v] = -Math.abs(nums[v]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};

// 思路：
// 宣告 res 為空陣列
// 遍歷 nums
//   宣告 v 為 nums[i] 的絕對值 - 1
//   將 nums 索引為 v 的值不論正負都轉為負數
// 遍歷 nums
// 　如果 nums[i] 大於 0
//     將 i + 1 加入 res 中
// 回傳 res
// 這題就是運用陣列的值最高不會超過長度的特性，使用之前一直拿來處理陣列用的翻轉數字的方式去解，也是第一次使用這方法一次通過 leetcode submit，挺開心的

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
