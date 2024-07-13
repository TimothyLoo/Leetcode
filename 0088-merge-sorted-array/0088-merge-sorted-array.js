/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l = m - 1;
    let r = n - 1;
    
    for (let i = m + n - 1; i >= 0; i--) {
        if (l >= 0 && nums1[l] >= nums2[r]) {
            nums1[i] = nums1[l];
            l--;
        } else if (r >= 0) {
            nums1[i] = nums2[r];
            r--;
        }
    }
};