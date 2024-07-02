/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const res = [];
    for (const c of s) {
        if (c !== '*') {
            res.push(c);
        } else {
            res.pop();
        }
    }

    return res.join('');
};