# While문 구구단

n2 = 1
while n2 <= 9:
    n1 = 1
    while n1 <= 9:
        print("%d * %d = %d" % (n2, n1, n2 * n1))
        n1 += 1
    n2 += 1

    
# For문 구구단


for i in range(1, 10):
    for e in range(1,10):
        print("%d * %d = %d" % (i, e, i * e))
