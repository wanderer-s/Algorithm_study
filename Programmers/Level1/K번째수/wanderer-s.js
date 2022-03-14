function solution(array, commands) {
  var answer = [];
  
  for(let n = 0; n < commands.length; n++) {
      let i = commands[n][0] // commands의 첫번째 숫자 - 몇번째 부터
      let j = commands[n][1] // commands의 두번째 숫자 - 몇번째 까지
      let k = commands[n][2] // commands의 세번째 숫자 - 몇번째 숫자
      
      let result = array.slice(i-1, j) //  index는 0부터이니 i - 1
      result.sort( (a,b) => a - b) // 정렬
      answer.push(result[k-1]) // 마찬가지로 index는 0부터라서 k - 1
  }
  return answer;
}