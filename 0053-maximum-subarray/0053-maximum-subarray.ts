// 4/5/2023, Wednesday
function maxSubArray(nums: number[]): number {
    // create current variable
    // create max variable
    
    // iterate through nums
        // if (element + current < current) current = element
        // else add element to current
        // max = max(current, max)
    
    // return max
    
    let current: number = 0;
    let max: number = -Infinity;
    
    for (const num of nums) {
        (num + current < num)
            ? current = num
            : current += num;
        max = Math.max(current, max);
    }
    
    return max;
};