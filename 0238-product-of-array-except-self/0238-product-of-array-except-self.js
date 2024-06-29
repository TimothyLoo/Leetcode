/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let tot = 1;
    let numOfZ = 0;
    const ans = [];
    
    for (const n of nums) {
        if (n) tot *= n;
        if (!n) numOfZ++;
    }
    
    for (const n of nums) {
        if (numOfZ === 0) {
            ans.push(tot/n);
        } else if (numOfZ === 1 && !n) {
            ans.push(tot);
        } else {
            ans.push(0);
        }
    }
    
    return ans;
};