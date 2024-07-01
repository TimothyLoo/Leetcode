/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0;
    let max = 0;
    let z = 0;
    
    for (let r = 0; r < nums.length; r++) {
        if (!nums[r]) z++;
        if (z <= k) max = Math.max(r - l + 1, max);
        if (z > k) {
            if (!nums[l]) z--;
            l++;
        }
    }
    
    return max;
};