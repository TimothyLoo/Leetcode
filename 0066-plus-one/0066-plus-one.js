/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    let r = 0;
    while (i >= 0 || r === 1) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
            r = 1;
        }
        if (i === 0) digits.unshift(r);
        i--;
    }
    return digits;
};