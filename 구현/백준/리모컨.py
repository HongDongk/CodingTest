# 못품
# 채점시간오래걸림..
# 파이썬에서 절댓값은? ->  abs()   예시) abs(-5) = 5

import sys
input = sys.stdin.readline
goal = int(input())
count = int(input())
brokennumbers = list(map(int, input().split()))

mincount = abs(goal-100)

for number in range(1000001):
    number = str(number)
    for i in range(len(number)):
        if int(number[i]) in brokennumbers:
            break
        elif i == len(number)-1:
            mincount = min(mincount, abs(int(number)-goal)+len(number))
            
print(mincount)
            