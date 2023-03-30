function pivotIndex(nums: number[]): number {
    // initiate left sum
    let left: number = 0;
    // initiate right sum as total sum of nums
    let right: number = nums.reduce((accumulator, current)=>
        accumulator + current, 0);
    
    // iterate through the nums array
    for (let i: number = 0; i < nums.length; i++) {
        // subtract num at current index from right sum
        right -= nums[i];
        // if left sum equals right sum, return current index
        if (left === right) return i;
        // add num at current index to left sum
        left += nums[i];
    }
    
    // return -1
    return -1;
};