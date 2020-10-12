def solution(array, commands):
    answer = []
    
    for n in range(0, len(commands)):
        arr = array[commands[n][0] - 1:commands[n][1]]
        arr.sort()
        answer.append(arr[commands[n][2] - 1])
    
    return answer