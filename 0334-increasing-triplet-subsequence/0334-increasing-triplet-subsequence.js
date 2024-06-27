/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Infinity;
    let mid = Infinity;
    
    for (const n of nums) {
        if (n <= min) {
            min = n;
        } else if (n <= mid) {
            mid = n;
        } else {
            return true;
        }
    }
    return false;
};