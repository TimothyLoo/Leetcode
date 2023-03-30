/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // define an accumulator
    let accumulator = 0;
    // define a result array
    const result = [];
    // iterate through nums
    for (const num of nums) {   
        // add each element to accumulator
        accumulator += num;
        // push accumulator to result array
        result.push(accumulator);
    }
    
    // return result array
    return result;
    
};