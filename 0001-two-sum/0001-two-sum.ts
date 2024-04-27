function twoSum(nums: number[], target: number): number[] {
    const map = {};
    
    // loop
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const dif = target - cur;
        // if target - current in map, return indicies
        if (dif in map) {
            return [i, map[dif]]
        }
        // put in map
        map[cur] = i;
    }
};