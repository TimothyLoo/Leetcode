/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let result = 0;
    const visited = new Set();
    const queue = [];
    
    for (let i = 0; i < m; i++) {
        queue.push([i,0]);
        queue.push([i,n-1]);
    }
    
    for (let i = 0; i < n; i++) {
        queue.push([0,i]);
        queue.push([m-1,i]);
    }
    
    while (queue.length) {
        let q = queue.length;
        for (let i = 0; i < q; i++) {
            let cur = queue.shift();
            let a = cur[0];
            let b = cur[1];
            
            if (grid[a][b] === 1) {
                grid[a][b] = 2;
                visited.add(cur.join(','));
                let directions = [[a+1,b],[a-1,b],[a,b+1],[a,b-1]];
                for (const direction of directions) {
                    let x = direction[0];
                    let y = direction[1];
                    if (x >= 0 && x < m && y >= 0 && y < n) {
                        if (!visited.has(direction.join(',')))
                            queue.push(direction);
                    }
                }
            }
        }
    }
    
    console.log(grid)
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) result++;
        }
    }
    
    return result;
};