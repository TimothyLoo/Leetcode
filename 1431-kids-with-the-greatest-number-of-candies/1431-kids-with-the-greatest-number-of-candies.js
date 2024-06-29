/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = [];
    
    for (const n of candies) {
        if (n + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    
    return result;
};