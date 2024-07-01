
var RecentCounter = function() {
    this.p = [];
    this.l = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.p.push(t);
    while (this.p[this.l] < t - 3000) {
        this.l++;
    }
    return this.p.length - this.l;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */