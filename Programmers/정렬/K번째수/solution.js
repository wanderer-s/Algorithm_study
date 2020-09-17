function solution(array, commands) {
  var answer = [];
  
  for(let n = 0; n < commands.length; n++) {
      let i = commands[n][0]
      let j = commands[n][1]
      let k = commands[n][2]
      
      let result = array.slice(i-1, j)
      result.sort( (a,b) => a - b)
      answer.push(result[k-1])
  }
  return answer;
}