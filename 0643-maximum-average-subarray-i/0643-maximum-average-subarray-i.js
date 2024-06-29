/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let l = 0;
    let r = 0;
    let sum = 0;
    while (r < k) {
        sum += nums[r];
        r++;
    }
    let max = sum/k;
    while (r < nums.length) {
        sum -= nums[l];
        sum += nums[r];
        max = Math.max(max,sum/k);
        l++;
        r++;
    }
    return max;
};