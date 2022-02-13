function solution(n, lost, reserve) {
    let studentsCloths = []
    
    for(let i = 0; i < n; i++) {
        //모든 학생에게 체육복이 있다고 설정
        studentsCloths.push(1)
        
        //여분의 체육복이 있으면 해당 학생 체육복 + 1
        if(reserve.includes(i + 1)) {
            studentsCloths[i]++
        }
        // 잃어버렸으면 해당 학생 체육복 - 1
        if(lost.includes(i + 1)) {
            studentsCloths[i]--
        }
    }
    for(let i = 0; i < n; i++) {
        if(studentsCloths[i] === 0) { // 체육복을 잃어버린 학생의 경우
            if(studentsCloths[i - 1] === 2) { // 전 번호의 학생이 체육복이 2 개면
                studentsCloths[i - 1] -- // 체육복을 현재번호의 학생에게 전달
                studentsCloths[i] ++
            } else if(studentsCloths[i + 1] === 2) {
                // 전 번호의 학생이 체육복이 2개가 아니면 다음 번호의 학생 체육복을 확인하여 2개면
                studentsCloths[i + 1] -- // 체육복을 현재번호의 학생에게 전달
                studentsCloths[i] ++
            }
        }
    }
    let students = 0
    for(let i = 0; i < n; i++) {
        if(studentsCloths[i]) { // 체육복을 가지고 있는 학생수를 샌다 (studentsCloths가 0 이면 false)
            students ++
        }
    }
    return students
}