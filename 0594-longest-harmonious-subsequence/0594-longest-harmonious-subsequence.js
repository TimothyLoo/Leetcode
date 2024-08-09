/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = {};
    let res = 0;
    for (const n of nums) {
        map[n] = map[n] + 1 || 1;
        if (n + 1 in map)
            res = Math.max(map[n] + map[n + 1], res)
        if (n - 1 in map)
            res = Math.max(map[n] + map[n - 1], res)
    }
    
    return res;
};