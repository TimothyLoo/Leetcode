function twoSum(nums: number[], target: number): number[] {
// 3/30/23, Thursday
    // iterate through the array
        // iterate through the array
            // if the 2 elements equal the target, return the indicies
    
//     const tuples: number[][] = [];
//     for (let i = 0; i < nums.length; i++) {
//         tuples.push([nums[i], i]);
//     }
    
//     tuples.sort((a,b)=>a[0] - b[0]);
    
//     let l: number = 0;
//     let r: number = tuples.length - 1;
    
//     while (l < r) {
//         let lValue = tuples[l][0];
//         let rValue = tuples[r][0];
//         let lIndex = tuples[l][1];
//         let rIndex = tuples[r][1];
//         if (lValue + rValue === target)
//             return [lIndex, rIndex];
//         if (lValue + rValue < target) {
//             l++;
//             continue;
//         }
//         if (lValue + rValue > target) {
//             r--;
//             continue;
//         }
//     }
    
    let map: Object = {};
    
    for (let i: number = 0; i < nums.length; i++) {
        let diff: number = target - nums[i];
        if (diff in map) return [i, map[diff]];
        map[nums[i]] = i;
    }
};