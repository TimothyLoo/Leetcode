/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = new Set(nums);
    const res = [...set].sort((a,b)=>b-a);
    if (res.length < 3) {
        return res[0];
    } else {
        return res[2];
    }
};