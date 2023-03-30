function runningSum(nums: number[]): number[] {
    // initiate accumulator
    let accumulator: number = 0;
    
    // initiate result array
    const result: number[] = [];
    
    // iterate through nums
    for (const num of nums) {
        // add num to accumulator
        accumulator += num;
        // push accumulator to result array
        result.push(accumulator);
    }
    
    // return result array
    return result;
};