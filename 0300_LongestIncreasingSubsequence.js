/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    var lengths = Array.from({ length: nums.length }, () => 1);
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                lengths[i] = Math.max(lengths[i], lengths[j] + 1)
            }
        }
    }
    return Math.max(...lengths);
};

lengthOfLIS([10,9,2,5,3,7,101,18])