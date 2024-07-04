/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = '';
    let p = 0;
    
    while (p < 201) {
        let c = null;
        for (const str of strs) {
            if (c === null) c = str[p];
            if (str[p] !== c) return res;
            if (str[p] === undefined) return res;
        }
        res += c;
        p++;
    }
    
    return res;
};