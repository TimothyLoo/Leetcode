/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = '';
    let prev = '';
    let count = 0;
    
    for (const c of chars) {
        if (c !== prev) {
            if (count > 1) s += count;
            s += c;
            prev = c;
            count = 0;
        }
        count++;
    }
    if (count > 1) s += count;
    
    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }
    
    return s.length;
};