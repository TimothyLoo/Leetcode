/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString();
    let l = 0;
    let r = y.length - 1;
    
    while (l < r) {
        if (y[l] !== y[r]) {
            return false;
        }
        l += 1;
        r -=1;
    }
    
    return true;
};