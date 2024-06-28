/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    
    while (l < r) {
        let h = Math.min(height[l],height[r]);
        let w = r - l;
        max = Math.max(h*w,max);
        (height[l] < height[r]) ? l++ : r--;
    }
    return max;
};