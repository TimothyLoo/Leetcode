/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let alt = 0;
    for (const g of gain) {
        alt += g;
        max = Math.max(max, alt);
    }
    return max;
};