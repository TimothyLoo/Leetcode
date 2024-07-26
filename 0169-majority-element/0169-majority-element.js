/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    let count = 0;
    for (const n in nums) {
        if (nums[n] !== nums[n-1]) count = 0;
        count++;
        if (count > nums.length / 2) return nums[n];
    }
};