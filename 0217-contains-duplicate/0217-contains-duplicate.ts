// 3/31/2023, Friday
function containsDuplicate(nums: number[]): boolean {
    // define set
    // iterate through array
        // if element in set, return true
        // add to set
    // return false
    
    const set = new Set<number>();
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    
    return false;
};