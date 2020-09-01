#파라미터로 정수형 num의 값을 받는 sum_digit 함수를 쓰세요. sum_digit은 num의 각 자리수를 더한 값을 리턴해주는 역할을 합니다.

#예를 들어 12의 각 자리수는 1, 2이므로 sum_digit(12)는 3(1 + 2)을 리턴해줍니다.

#마찬가지로 486의 각 자리수는 4, 8, 6이므로 sum_digit(486)은 18(4 + 8 + 6)을 리턴해줍니다.

#for문을 사용하여, sum_digit(1)부터 sum_digit(1000)까지의 합을 구해보세요

# 자리수 합 리턴
def sum_digit(num):
    # 코드를 입력하세요.
    num = str(num)
    sum = 0
    for i in range(len(num)):
        sum = sum + int(num[i])
    return sum

# sum_digit(1)부터 sum_digit(1000)까지의 합 구하기
# 코드를 입력하세요
digit = 1000
sum = 0
for i in range(digit + 1):
    sum = sum + sum_digit(i)

print(sum)