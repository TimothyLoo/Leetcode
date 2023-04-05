// 4/4/2023, Tuesday
function productExceptSelf(nums: number[]): number[] {
    // create an answer array of ones same length as nums
    // create an accumulator, initiated to 1
    // iterate through answer forward
        // multiply answer[i] by L
        // if (i > 0) multiply L by nums[i-1]
    // set accumulator back to 1
    // iterate through answer backwards
        // multiply answer[i] by L
        // if (i < nums.length) multiply L by nums[i+1]
    // return answer
    
    const answer: number[] = new Array(nums.length).fill(1);
    
    let accumulator: number = 1;
    
    for (let i: number = 0; i < answer.length; i++) {
        answer[i] *= accumulator;
        accumulator *= nums[i];
    }
    
    accumulator = 1;
    
    for (let i: number = answer.length - 1; i >= 0; i--) {
        answer[i] *= accumulator;
        accumulator *= nums[i];
    }
    
    return answer;
};