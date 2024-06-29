/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {};
    
    for (const n of arr) {
        map[n] = map[n] + 1 || 1;
    }
    
    const count = Object.values(map);
    return count.length === new Set(count).size;
};