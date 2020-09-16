from random import randint

numbers = []
index = 0

#무작위 숫자 0 ~ 9 선별
while len(numbers)<3:
    random_number = randint(0,9)
    
    #중복 X
    while random_number in numbers:
        random_number = randint(0,9)
    numbers.append(random_number)
    

guess_numbers = [] #아래 while문 guess_numbers의 정의가 필요    
print("0과 9 사이의 서로 다른 세 숫자를 랜덤한 순서로 뽑았습니다.")
tries = 0

while guess_numbers != numbers:
    print("세 수를 하나씩 차례대로 입력하세요.")
    guess_numbers = [] #numbers를 맞추지 못했을 때 반복문에서 guess_numbers가 초기화 되어야 함
    
    while index <= 2:
        guess = int(input("%d번째 수를 입력하세요: " % (index + 1)))
        if guess in guess_numbers:
            print("중복되는 수 입니다. 다시 입력해주세요.")
            continue
        if guess < 0 or guess > 9:
            print("범위를 벗어나는 수입니다. 다시 입력해주세요")
            continue
        guess_numbers.append(guess)
        index += 1
    
    index = 0
    strike = 0
    ball = 0
    
    while index < 3:
        if guess_numbers[index] == numbers[index]:
            strike += 1
        elif guess_numbers[index] in numbers:
            ball += 1
        index += 1
    print("%dS %dB" % (strike, ball))
    tries += 1
    index = 0 # numbers를 맞추지 못했을 때 index를 초기화 해야함.
    
    
print("축하합니다. %d번째만에 세 숫자의 값과 위치를 모두 맞추셨습니다." % (tries))
