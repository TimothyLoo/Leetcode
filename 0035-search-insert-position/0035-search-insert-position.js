/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        const h = Math.floor((l + r)/2);
        if (target > nums[h]) {
            l = h + 1;
        } else if (target < nums[h]) {
            r = h - 1;
        } else {
            return h;
        }
    }
    return l;
};