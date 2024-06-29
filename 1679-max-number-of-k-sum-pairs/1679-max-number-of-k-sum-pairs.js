/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let result = 0;
    
    const differences = new Map();
    
    for (const n of nums) {
        const d = k - n;
        if (differences.get(d) > 0) {
            differences.set(d, differences.get(d) - 1);
            result++;
        } else {
            if (!differences.has(n)) differences.set(n, 0);
            differences.set(n, differences.get(n) + 1);
        }
    }
    return result;
};