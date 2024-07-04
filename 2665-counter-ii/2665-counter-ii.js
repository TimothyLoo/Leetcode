/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let i = 0;
    return {
        increment: () => {
            i++;
            return init + i;
        },
        decrement: () => {
            i--;
            return init + i;
        },
        reset: () => {
            i = 0;
            return init + i;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */