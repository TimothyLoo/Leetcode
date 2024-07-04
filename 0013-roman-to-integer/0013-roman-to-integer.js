/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let v = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    let p = 0;
    let r = 0;
    while (p < s.length) {
        const c = s[p];
        const nc = s[p+1];
        if (c+nc in v) {
            r += v[c+nc];
            p++;
        } else {
            r += v[c];
        }
        p++;
    }
    
    return r;
};