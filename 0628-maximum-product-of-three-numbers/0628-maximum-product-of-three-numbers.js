/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    const last = nums.length - 1;
    const neg = nums[0] * nums[1] * nums[last];
    const pos = nums[last - 2] * nums[last - 1] * nums[last];
    return Math.max(neg, pos);
};