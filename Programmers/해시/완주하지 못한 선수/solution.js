function solution(participant, completion) {
    // 1. participant의 배열을 객체화 하여 배열값을 key로 value는 1으로 함 (동명이인은  value값이 2)
    // 2. completion의 배열도 객체화 함
    // 3. 1번의 객체와 2번객체의 key로 value값을 비교
    // 4. value값이 다른 key를 리턴
    
    let participantObj = {}
    //참가자의 배열을 객체화하는 과정
    for(let runner of participant) {
        if(!participantObj[runner]) {
            //객체 안에 참가자이름으로 key, value가 없을 시
            //해당 key로 value 1 할당
            //이 경우 key는 참가자이름
            participantObj[runner] = 1
        }else if(participantObj[runner]) {
            //객체 안에 참가자 이름으로 key 존재시
            //해당 value + 1
            participantObj[runner] += 1
        }
    }
    
    let completionObj = {}
    //위와 같은 조건으로 완주자 객체 생성
    //같은 조건이나 이 문제의 조건은 완주자에 동명2인이 없음으로
    //else if문으로 내려가진 않음
    for(let runner of completion) {
        if(!completionObj[runner]) {
            completionObj[runner] = 1
        }else if(completionObj[runner]) {
            completionObj[runner] += 1
        }
    }

    //참가자 객체를 반복문으로 돌며 완주자객체와 value값이 다른 key를 리턴
    for(let key in participantObj) {
        if(completionObj[key] !== participantObj[key]) {
            return key
        }
    }
}