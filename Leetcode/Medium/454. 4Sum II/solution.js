/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  const numObj = {};

  for (const a of nums1) {
    for (const b of nums2) {
      const sum = a + b;

      if (!numObj[sum]) {
        numObj[sum] = 0;
      }

      numObj[sum]++;
    }
  }

  for (const c of nums3) {
    for (const d of nums4) {
      const sum = c + d;

      if (numObj[-sum]) {
        count += numObj[-sum];
      }
    }
  }

  return count;
};
