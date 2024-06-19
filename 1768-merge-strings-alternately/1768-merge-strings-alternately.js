/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = [];
    const max = Math.max(word1.length, word2.length);
    let pointer = 0;
    
    while (pointer < max) {
        if (pointer < word1.length) {
            result.push(word1[pointer])
        }
        if (pointer < word2.length) {
            result.push(word2[pointer])
        }
        pointer++;
    }
    
    return result.join('');
};