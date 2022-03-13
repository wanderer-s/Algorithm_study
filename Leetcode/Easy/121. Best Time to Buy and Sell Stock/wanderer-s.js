/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let profit = 0;

  for (let right = 0; right < prices.length; right++) {
    if (prices[left] > prices[right]) left = right;

    profit = Math.max(profit, prices[right] - prices[left]);
  }

  return profit;
};
