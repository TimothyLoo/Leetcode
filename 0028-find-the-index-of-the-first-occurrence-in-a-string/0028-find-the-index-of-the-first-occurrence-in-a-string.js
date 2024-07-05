/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let h = 0;
    let n = needle.length;
    
    while (n <= haystack.length) {
        if (haystack.substring(h,n) === needle) return h;
        h++;
        n++;
    }
    
    return -1;
};