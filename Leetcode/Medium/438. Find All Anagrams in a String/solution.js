/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pObj = {}

  for (const key of p) {
    if (!(key in pObj)) {
      pObj[key] = 0
    }
    pObj[key]++
  }

  let left = 0
  let right = 0
  let checkCount = p.length
  const result = []
  while (right < s.length) {
    if (pObj[s[right]] > 0) checkCount--

    pObj[s[right]]--
    right++

    if (checkCount === 0) result.push(left)

    if (right - left === p.length) {
      if (pObj[s[left]] >= 0) checkCount++
      pObj[s[left]]++
      left++
    }
  }
  return result
}
