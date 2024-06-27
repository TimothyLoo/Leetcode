/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = '';
    let count = 0;
    let prev = '';
    for (const c of chars) {
        if (c !== prev) {
            if (count > 1) s += count;
            s += c;
            count = 0;
            prev = c;
        }
        count++;
    }
    if (count > 1) s+=count;
    for (let i = 0; i < s.length; i++) chars[i] = s[i];
    return s.split('').length;
};