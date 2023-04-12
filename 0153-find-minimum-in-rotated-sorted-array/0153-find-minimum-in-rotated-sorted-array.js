/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        if (l === r-1 || l === r) return Math.min(nums[l], nums[r]);
        let m = l + Math.floor((r - l) / 2);
        (nums[r] < nums[m]) ? l = m : r = m;
    }
};