/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //target 에서 nums[0]을 뺀 값이 nums[0] 이후에 있는지 검사
  //없으면 nums[1]을 뺀 값이 num[1] 이후에 있는지 검사
  //있을 때 까지 반복

  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (otherNum === nums[j]) {
        return [i, j];
      }
    }
  }
};
