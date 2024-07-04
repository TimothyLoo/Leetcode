/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        res.push(fn(a,i));
    }
    return res;
};