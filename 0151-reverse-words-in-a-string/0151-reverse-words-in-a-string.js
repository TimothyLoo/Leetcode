/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const array = s.split(' ');
    const result = [];
    while (array.length) {
        let next = array.pop();
        if (next !== '')
            result.push(next);   
    }
    return result.join(' ');
};