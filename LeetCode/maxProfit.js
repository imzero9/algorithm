// Best Time to Buy and Sell Stock

// Incomplete solution - 202 out of 211 cases passed
var maxProfit = function (prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];

            if (profit < 0) continue;
            maxProfit = profit > maxProfit ? profit : maxProfit;
        }
    }

    return maxProfit;
};

// Complete solution
// [7,1,5,3,6,4]
var maxProfit = function (prices) {
    let profit = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};
