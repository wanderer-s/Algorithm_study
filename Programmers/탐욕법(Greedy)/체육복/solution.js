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
        if(studentsCloths[i] === 0) {
            if(studentsCloths[i - 1] === 2) {
                studentsCloths[i - 1] --
                studentsCloths[i] ++
            } else if(studentsCloths[i + 1] === 2) {
                studentsCloths[i + 1] --
                studentsCloths[i] ++
            }
        }
    }
    let students = 0
    for(let i = 0; i < n; i++) {
        if(studentsCloths[i]) {
            students ++
        }
    }
    return students
}