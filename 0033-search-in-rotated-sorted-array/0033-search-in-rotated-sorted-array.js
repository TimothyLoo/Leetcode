/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 4/12/23, Wednesday

var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        let m = l + Math.floor((r-l) / 2);
        if (nums[m] === target) return m;
        if (nums[r] > nums[m]) { // increasing from midpoint
            (nums[m] < target && target <= nums[r])
                ? l = m + 1
                : r = m - 1;
        } else {
            (nums[l] <= target && target < nums[m])
                ? r = m - 1
                : l = m + 1;
        }
    }
    
    return -1;
};