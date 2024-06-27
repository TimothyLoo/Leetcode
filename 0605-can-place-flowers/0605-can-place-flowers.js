/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const l = flowerbed.length;
    let count = 0;
    for (let i = 0; i < l; i++) {
        if (flowerbed[i] === 0) {
            const emptyL = flowerbed[i-1] === 0 || i === 0;
            const emptyR = flowerbed[i+1] === 0 || i === l - 1;
            if (emptyL && emptyR) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    return count >= n;
};