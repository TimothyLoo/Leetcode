/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const visited = new Map();
    let callCount = 0;
    return function(...args) {
        if (!(args in visited)) {
            visited[args] = fn(...args);
            callCount++;
        }
        return visited[args];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */