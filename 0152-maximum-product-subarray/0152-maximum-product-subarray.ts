// 4/7/23, Thursday

function maxProduct(nums: number[]): number {
    // intiate max var to 1st element of array
    // initiate maxSoFar var 1st first element of array
    // initiate negSoFar var 1st first element of array
    
    // iterate through the array
        // maxSoFar set to max of (i, maxSoFar * i, negSoFar * i)
        // negSoFar set to min of (i, negSoFar * i)
        // max set to max of (max, maxSoFar)
    
    
    let max: number = nums[0];
    let maxSoFar: number = nums[0];
    let total: number = nums[0];
    
    for (let i: number = 1; i < nums.length; i++) {
        (!total) ? total = nums[i] : total *= nums[i];
        maxSoFar = Math.max(nums[i], maxSoFar * nums[i]);
        max = Math.max(max, maxSoFar, total);
    }
    
    maxSoFar = nums[nums.length - 1];
    total = nums[nums.length - 1];
    
    for (let i: number = nums.length - 2; i >= 0; i--) {
        (!total) ? total = nums[i] : total *= nums[i];
        maxSoFar = Math.max(nums[i], maxSoFar * nums[i]);
        max = Math.max(max, maxSoFar, total);
    }
    
    return max;
};