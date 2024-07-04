/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = ['[','{','('];
    const stack = [];
    for (const p of s) {
        const last = stack[stack.length - 1];
        if (open.includes(p)) {
            stack.push(p);
        } else if (p === ']' && last === '[') {
            stack.pop();
        } else if (p === '}' && last === '{') {
            stack.pop();
        } else if (p === ')' && last === '(') {
            stack.pop();
        } else {
            return false;
        }
    }
    return (stack.length) ? false : true;
};