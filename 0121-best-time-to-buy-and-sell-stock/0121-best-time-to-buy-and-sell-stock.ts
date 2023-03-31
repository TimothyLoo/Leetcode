// 3/31/2023, Friday
function maxProfit(prices: number[]): number {
    let l: number = 0;
    let maxProfit: number = 0;
    
    for (let r: number = 0; r < prices.length; r++) {
        maxProfit = Math.max(prices[r] - prices[l], maxProfit);
        if (prices[r] < prices[l]) l = r;
    }
    
    return maxProfit;  
};