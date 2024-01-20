/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let l = 0;
    let r = needle.length - 1;
    let test = [];
    for (i = 0; i <= r; i++) {
        test.push(haystack[i]);
    }
    while (r < haystack.length) {
        if (needle === test.join('')) return l;
        l++;
        r++;
        test.shift();
        test.push(haystack[r]);
    }
    return -1;
};