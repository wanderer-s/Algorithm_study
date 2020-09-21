function solution(s, n) {
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  let result = ''
  for(let i = 0; i < s.length; i++) {
      if(lower.indexOf(s[i]) >= 0) {
          let index = lower.indexOf(s[i]) + n
          if(index > 25) {
              index = index - 26
              result += lower[index]
          } else {
              result += lower[index]
          }
      } else if(upper.indexOf(s[i]) >= 0) {
          let index = upper.indexOf(s[i]) + n
          if(index > 25) {
              index = index - 26
              result += upper[index]
          } else {
              result += upper[index]
          }
      } else if(s[i] === ' ') {
          result += ' '
      }
  }
  return result
}