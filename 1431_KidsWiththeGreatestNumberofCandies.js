/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatest = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest) {
            candies[i] = true
        } else {
            candies[i] = false
        }
    }
    return candies
};

console.log(kidsWithCandies([2,3,5,1,3], 3))