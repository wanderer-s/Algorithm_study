/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxCount = 0;
  accounts.forEach((account) => {
    let sum = 0;
    account.forEach((money) => {
      sum += money;
    });
    maxCount = Math.max(maxCount, sum);
  });
  return maxCount;
};
