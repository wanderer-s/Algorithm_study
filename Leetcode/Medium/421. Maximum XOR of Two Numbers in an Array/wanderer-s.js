/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  const sets = [...new Set(nums)];

  let maxResult = 0;
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      maxResult = Math.max(sets[i] ^ sets[j], maxResult);
    }
  }
  return maxResult;
};
