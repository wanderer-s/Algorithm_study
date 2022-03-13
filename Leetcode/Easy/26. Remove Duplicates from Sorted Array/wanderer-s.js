/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let result = 0
  for(let i = 0; i < nums.length; i++) {
      if(nums[result] !== nums[i]) {
          nums[result + 1] = nums[i]
          result++
      }
  }
  return result + 1
};