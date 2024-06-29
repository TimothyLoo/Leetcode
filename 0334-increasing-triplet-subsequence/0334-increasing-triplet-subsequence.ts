function increasingTriplet(nums: number[]): boolean {
    let l: number = Infinity;
    let r: number = Infinity;
    
    for (const n of nums) {
        if (n <= l) {
            l = n;
        } else if (n <= r) {
            r = n;
        } else {
            return true;
        }
    }
    
    return false;
};