/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const map = {};
    let i = 0;
    while (i <= n) {
        if (i === 0) {
            map[i] = 0;
        }
        else if (i === 1 || i === 2) {
            map[i] = 1;
        }
        else {
            map[i] = map[i-1] + map[i-2] + map[i-3];
        }
        
        i++;
    }
    
    return map[n];
};