/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let l:number = 0;
    
    for (let r:number = 0; r < nums.length; r++) {
        if (nums[l] === 0) {
            if (nums[r] !== 0) {
                [nums[l],nums[r]] = [nums[r],nums[l]];
            }
        }
        if (nums[l] !== 0) l++;
    }
};