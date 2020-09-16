#현명하게 거스름돈을 계산해주는 프로그램을 만드려고 합니다. 
#예를 들어 33,000원짜리 물건을 사기 위해 100,000원을 냈다면, 
#50,000원 1장, 10,000원 1장, 5,000원 1장, 1,000원 2장과 같이 '가장 적은 수'의 지폐를 거슬러 주는 방식입니다.

#payment(지불한 금액)와 cost(가격)라는 파라미터 두개를 필요로 하는 함수 calculate_change를 쓰세요. 
#이 함수는 거스름돈을 위해 50,000원짜리와 10,000원짜리, 5,000원짜리, 1,000원짜리가 각각 몇 장 필요한지 출력해주는 역할을 합니다.


#payment, cost 파라미터의 값은 1,000의 배수라고 가정합시다.


def calculate_change(payment, cost):
    change = payment - cost
    fifty_bills = change // 50000
    change = change % 50000
    ten_bills = change // 10000
    change = change % 10000
    five_bills = change // 5000
    change = change % 5000
    bills = change // 1000
    
    print("%d원 지폐: %d장" % (50000, fifty_bills))
    print("%d원 지폐: %d장" % (10000, ten_bills))
    print("%d원 지폐: %d장" % (5000, five_bills))
    print("%d원 지폐: %d장" % (1000, bills))
    
    
def calculate_change_v2(payment, cost):
    # 코드를 작성하세요.
    change = payment - cost
    fifty_bill = change // 50000
    change = change % 50000
    ten_bill = change // 10000
    change = change % 10000
    five_bill = change // 5000
    change = change % 5000
    one_bill = change // 1000
    print("50000원 지폐: {}장".format(fifty_bill))
    print("10000원 지폐: {}장".format(ten_bill))
    print("5000원 지폐: {}장".format(five_bill))
    print("1000원 지폐: {}장".format(one_bill)


def calculate_change_v3(payment, cost):
    # 코드를 작성하세요.
    change = payment - cost
    fifty_bill = change // 50000
    change = change % 50000
    ten_bill = change // 10000
    change = change % 10000
    five_bill = change // 5000
    change = change % 5000
    one_bill = change // 1000
    print(f"50000원 지폐: {fifty_bill}장")
    print(f"10000원 지폐: {ten_bill}장")
    print(f"5000원 지폐: {five_bill}장")
    print(f"1000원 지폐: {one_bill}장")