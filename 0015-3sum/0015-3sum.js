/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 4/18/23, Tuesday

var threeSum = function(nums) {
    // init left and right pointers
    // create set for results
    
    // run through array and create hashmap
    
    // double loop through array
        // calculate difference
        // find difference in hashmap
            // check if difference is not left and not right
                // create temp solution array, sort
                // add solution to our solutions set
    
    // return the solutions array
    
    let l = 0;
    let r = nums.length - 1;
    const hashMap = {};
    const result = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        hashMap[key] = hashMap[key] + 1 || 1;
    }
    
    for (let l = 0; l < nums.length; l++) {
        for (let r = l + 1; r < nums.length; r++) {
            let lVal = nums[l];
            let rVal = nums[r];
            
            let dif = 0 - lVal - rVal; // dif is a value
        
            if (dif in hashMap) {
                if (dif === lVal && dif === rVal && hashMap[dif] < 3) {
                    // do nothing
                } else if ((dif === rVal || dif === lVal) && hashMap[dif] < 2) {
                    // do nothing
                } else {
                    let temp = [dif, lVal, rVal].sort((a,b)=>a-b);
                    result.add(temp.join(','));
                }
            }
        }
    }
    
    return [...result].map(r=>r.split(','));
};