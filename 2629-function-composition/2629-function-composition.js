/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if (!functions.length) return (x) => x;
    
    return functions.reduceRight((prev, next) => 
        (x) => next(prev(x))
    );
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */