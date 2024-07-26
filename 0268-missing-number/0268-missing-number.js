/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let cur = 0;
    for (const n of nums) {
        if (n !== cur) return cur;
        cur++;
    }
    return cur;
};