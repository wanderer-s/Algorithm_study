#리스트에 있는 데이터의 순서를 거꾸로 뒤집는 방법을 생각해내려고 합니다.
#numbers = [2, 4, 6, 8, 10, 12, 14]
#위와 같이 numbers라는 리스트가 주어졌을 때, for문을 사용하여 리스트를 거꾸로 뒤집어 아래의 내용이 출력되게 하세요.
#뒤집어진 리스트: [14, 12, 10, 8, 6, 4, 2]

numbers = [2, 4, 6, 8, 10, 12, 14]

for reverse in range(int(len(numbers) / 2)):
    right = len(numbers) - reverse - 1
    
    temp_numbers = numbers[reverse]
    numbers[reverse] = numbers[right]
    numbers[right] = temp_numbers

print("뒤집어진 리스트 : " + str(numbers))