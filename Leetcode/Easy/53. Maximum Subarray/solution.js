/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0]
  let maxSum = sum
  
  for(let i = 1; i < nums.length; i++) {
      sum = Math.max(nums[i], sum + nums[i]) //nums[i]가 큰지, sum과 더한 값이 큰지
      maxSum = Math.max(maxSum, sum) //sum과 maxSum비교 어느것이 더 큰지
  }
    return maxSum
};