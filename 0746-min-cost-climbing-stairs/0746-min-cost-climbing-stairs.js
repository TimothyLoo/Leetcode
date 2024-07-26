/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const map = {};
    
    function helper(i) {
        if (i >= cost.length) return 0;
        if (i in map) return map[i];
        map[i] = cost[i] + Math.min(helper(i+1),helper(i+2));
        
        return map[i];
    }
    
    return Math.min(helper(0),helper(1));
};