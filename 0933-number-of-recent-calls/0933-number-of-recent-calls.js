
var RecentCounter = function() {
    this.p = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let count = 0;
    this.p.push(t);
    this.p.forEach(_p=>{if(_p >= t - 3000) count++;})
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */