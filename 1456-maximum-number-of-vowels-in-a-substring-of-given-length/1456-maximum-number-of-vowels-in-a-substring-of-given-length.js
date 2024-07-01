/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const v = ['a','e','i','o','u'];
    let l = 0;
    let r = k-1;
    let count = 0;
    let max = 0;
    
    for (let i = 0; i <= r; i++) {
        if (v.includes(s[i])) count++;
        max = Math.max(count, max);
    }
    
    while (r < s.length) {
        r++;
        if (v.includes(s[r])) count++;
        if (v.includes(s[l])) count--;
        l++;
        max = Math.max(count, max);
    }
    
    return max;
};