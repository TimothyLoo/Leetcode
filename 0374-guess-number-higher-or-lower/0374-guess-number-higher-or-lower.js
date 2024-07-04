/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1;
    while (l <= n) {
        let half = Math.floor((n + l) / 2);
        if (guess(half) > 0) {
            l = half + 1;
        } else if (guess(half) < 0) {
            n = half - 1;
        } else {
            return half;
        }
    }
};