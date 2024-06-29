/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const dist1 = new Set();
    const dist2 = new Set();
    
    for (const n of nums1) {
        if (!nums2.includes(n)) dist1.add(n);
    }
    
    for (const n of nums2) {
        if (!nums1.includes(n)) dist2.add(n);
    }
    
    return [[...dist1], [...dist2]];
};