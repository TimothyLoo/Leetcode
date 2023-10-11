/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (i in nums) {
        let difference = target - nums[i];
        if (difference in map) {
            return [i, map[difference]];
        }
        map[nums[i]] = i;
    }
};