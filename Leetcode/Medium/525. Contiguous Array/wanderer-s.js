/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const numHash = {}
  let count = 0,
    longestLength = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count--
    else count++

    if (count === 0) longestLength = i + 1

    if (count in numHash) {
      longestLength = Math.max(longestLength, i - numHash[count])
    } else {
      numHash[count] = i
    }
  }

  return longestLength
}
