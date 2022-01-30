/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const size = nums.length;
  const rest = k % size;

  const tempArr = nums.splice(size - rest, rest);
  nums.splice(0, 0, ...tempArr);
};
