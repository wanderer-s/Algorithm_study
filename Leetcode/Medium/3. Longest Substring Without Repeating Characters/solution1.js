/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0,
      start = 0,
      strCount = {}
  for(let end = 0; end < s.length; end++) {
      const rightStr = s[end]
      if(!(rightStr in strCount)) { // strCount에 str을 count함
          strCount[rightStr] = 0
      }
      strCount[rightStr] += 1
      // value중 2 이상인것이 있으면 즉, 중복되는 글자가 하나라도 있으면 실행
      while(Math.max(...Object.values(strCount)) > 1) {
          const leftStr = s[start]
          start++
          strCount[leftStr] -= 1 // 제일 앞에 있는 글자 -1
          if(strCount[leftStr] === 0) { // 0이면 삭제
              delete strCount[leftStr]
          }
      }
      maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength
}