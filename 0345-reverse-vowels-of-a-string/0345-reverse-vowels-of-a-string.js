/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let l = 0;
    let r = s.length - 1;
    const res = s.split('');
    
    while (l < r) {
        if (!vowels.includes(res[l])) {
            l++;
        } else if (!vowels.includes(res[r])) {
            r--;
        } else {
            [res[l],res[r]] = [res[r],res[l]];
            l++;
            r--;
        }
    }
    
    return res.join('');
};