function solution(numbers) {
  /* 
  1. numbers의 숫자를 문자화 하여 정열
    (문자화 하지 않으면 가장 큰 수가 나오지 않는 경우가 생김)
    ex. [6, 10, 8] => [10, 8, 6] 1086 < 8610 
  2. 정열한 순서대로 이어 붙임
  */
  
  let sortedNum = numbers.sort((a, b) => ((String(b) + String(a)) - (String(a) + String(b))))
  let result = sortedNum.join('')
  return result[0] === '0' ? '0' : result
}