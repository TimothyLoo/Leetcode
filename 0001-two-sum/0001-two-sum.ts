function twoSum(nums: number[], target: number): number[] {
    // 3/30/23, Thursday
    // iterate through the array
        // iterate through the array
            // if the 2 elements equal the target, return the indicies
    
    const tuples: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        tuples.push([nums[i], i]);
    }
    
    tuples.sort((a,b)=>a[0] - b[0]);
    
    let l: number = 0;
    let r: number = tuples.length - 1;
    
    while (l < r) {
        if (tuples[l][0] + tuples[r][0] === target)
            return [tuples[l][1], tuples[r][1]];
        if (tuples[l][0] + tuples[r][0] < target) {
            l++;
            continue;
        }
        if (tuples[l][0] + tuples[r][0] > target) {
            r--;
            continue;
        }
    }
};