/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (const i in nums) {
        const dif = target - nums[i];
        if (map.has(dif)) return [map.get(dif),i];
        map.set(nums[i],i);
    }
};