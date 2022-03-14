function solution(answers) {
  let answer = []
  
  let student1 = [1, 2, 3, 4, 5], //1번 수포자가 찍는 방식
      student2 = [2,1,2,3,2,4,2,5], //2번 수포자가 찍는 방식
      student3 = [3,3,1,1,2,2,4,4,5,5] //3번 수포자가 찍는 방식
  
  let s1Cnt = 0, //1번 수포자 정답 갯수
      s2Cnt = 0, //2번 수포자 정답 갯수
      s3Cnt = 0  //3번 수포자 정답 갯수
  
  for(let i = 0; i < answers.length; i++) { //정답의 수만큼 반복
      if(answers[i] === student1[i % student1.length]) s1Cnt++
      if(answers[i] === student2[i % student2.length]) s2Cnt++ //찍는방식의 갯수로 나눈 나머지 인덱스와 정답을 비교
      if(answers[i] === student3[i % student3.length]) s3Cnt++ //그래야 i의 숫자가 계속 늘어나도 찍는방식 index안에서 비교가능
      
  }
  //가장 많이 맞춘수를 maxCnt로 하고 각 수포자가 maxCnt가 같은 경우
  //answer에 그 값을 넣어주고 answer를 return
  let maxCnt = Math.max(s1Cnt, s2Cnt, s3Cnt) // 모두가 똑같이 맞았다면
  if(s1Cnt === maxCnt) answer[answer.length] = 1 //length가 하나씩 늘어나며 answer에 숫자를 입력하게됨
  if(s2Cnt === maxCnt) answer[answer.length] = 2 //그리고 answer를 return
  if(s3Cnt === maxCnt) answer[answer.length] = 3
  
  return answer
  
}