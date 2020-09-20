function solution(participant, completion) {
    // 1. participant의 배열을 객체화 하여 배열값을 key로 value는 1으로 함 (동명이인은  value값이 2)
    // 2. completion의 배열도 객체화 함
    // 3. 1번의 객체와 2번객체의 key로 value값을 비교
    // 4. value값이 다른 key를 리턴
    
    let participantObj = {}
    
    for(let runner of participant) {
        if(!participantObj[runner]) {
            participantObj[runner] = 1
        }else if(participantObj[runner]) {
            participantObj[runner] += 1
        }
    }
    
    let completionObj = {}
    for(let runner of completion) {
        if(!completionObj[runner]) {
            completionObj[runner] = 1
        }else if(completionObj[runner]) {
            completionObj[runner] += 1
        }
    }
    for(let key in participantObj) {
        if(completionObj[key] !== participantObj[key]) {
            return key
        }
    }
}