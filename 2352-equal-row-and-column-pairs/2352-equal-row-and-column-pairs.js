/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    const map = {};
    for (const r of grid) {
        map[r] = map[r] + 1 || 1;
    }
    
    const col = [];
    for (let c = 0; c < grid.length; c++) {
        const _col = [];
        for (let r = 0; r < grid.length; r++) {
            _col.push(grid[r][c]);
        }
        col.push(_col);
    }
    
    for (const c of col) {
        if (c in map) count += map[c];
    }
    
    return count;
};