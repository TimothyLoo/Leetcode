/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0;
    let max = -Infinity;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] > max) {
            max = nums[r];
            [nums[l],nums[r]] = [nums[r],nums[l]];
            l++;
        }
    }
    return l;
};