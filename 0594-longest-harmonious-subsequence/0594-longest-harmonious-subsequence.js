/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = {};
    for (const n of nums) {
        map[n] = map[n] + 1 || 1;
    }
    
    let result = 0;
    
    for (const key in map) {
        const k = parseInt(key);
        if ((k + 1) in map)
            result = Math.max(map[k] + map[k + 1], result);
    }
    
    return result;
};