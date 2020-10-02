function solution(answers) {
  let answer = []
  
  let student1 = [1, 2, 3, 4, 5],
      student2 = [2,1,2,3,2,4,2,5],
      student3 = [3,3,1,1,2,2,4,4,5,5]
  
  let s1Cnt = 0,
      s2Cnt = 0,
      s3Cnt = 0
  
  for(let i = 0; i < answers.length; i++) {
      if(answers[i] === student1[i % student1.length]) s1Cnt++
      if(answers[i] === student2[i % student2.length]) s2Cnt++
      if(answers[i] === student3[i % student3.length]) s3Cnt++
      
  }
  
  let maxCnt = Math.max(s1Cnt, s2Cnt, s3Cnt)
  if(s1Cnt === maxCnt) answer[answer.length] = 1
  if(s2Cnt === maxCnt) answer[answer.length] = 2
  if(s3Cnt === maxCnt) answer[answer.length] = 3
  
  return answer
  
}