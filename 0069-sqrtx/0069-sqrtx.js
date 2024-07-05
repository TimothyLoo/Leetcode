/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    
    let l = 0;
    let h = x;
    
    while (l <= h) {
        const m = Math.floor((h+l)/2);
        if (m * m > x) {
            h = m - 1;
        } else if (m * m < x) {
            l = m + 1;
        } else {
            return m;
        }
    }
    
    return l - 1;
};