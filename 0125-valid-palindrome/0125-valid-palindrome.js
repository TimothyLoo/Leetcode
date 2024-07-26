/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAN(c) {
        return /^[a-z0-9]+$/i.test(c);
    }
    
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        while (l < r && !isAN(s[l])) l++;
        while (l < r && !isAN(s[r])) r--;
        
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        
        l++;
        r--;

    }
    return true;
};