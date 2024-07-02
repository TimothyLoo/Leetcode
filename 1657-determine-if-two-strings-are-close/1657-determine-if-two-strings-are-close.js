/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const map1 = {};
    const map2 = {};
    
    for (const l of word1) {
        map1[l] = map1[l] + 1 || 1;
    }
    
    for (const l of word2) {
        map2[l] = map2[l] + 1 || 1;
    }
    
    const key1 = Object.keys(map1).sort();
    const key2 = Object.keys(map2).sort();
    const val1 = Object.values(map1).sort();
    const val2 = Object.values(map2).sort();
    
    const max = Math.max(key1.length, key2.length);
    
    for (let i = 0; i < max; i++) {
        if (key1[i] !== key2[i]) return false;
        if (val1[i] !== val2[i]) return false;
    }
    
    return true;
};