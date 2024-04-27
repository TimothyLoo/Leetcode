/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = {};
    for (let i = 0; i < numbers.length; i++) {
        const cur = numbers[i];
        const dif = target - cur;
        if (dif in map) {
            return [map[dif]+1,i+1];
        }
        map[cur] = i;
    }
};