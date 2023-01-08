# 못품
# 이차원배열
# 전역변수

n = int(input())
bomboni = [list(input()) for i in range(n)]
maxcandy = 0

def check():
    global maxcandy
    for i in range(n):
        cnt = 1
        for j in range(n-1):
            if bomboni[i][j] == bomboni[i][j+1]:
                cnt+=1
                maxcandy = max(maxcandy, cnt)
            else:
                cnt = 1 
        cnt = 1
        for j in range(n-1):
            if bomboni[j][i] == bomboni[j+1][i]:
                cnt+=1
                maxcandy = max(maxcandy, cnt)
            else:
                cnt = 1 
        
for i in range(n):
    for j in range(n):
        if j+1<n:
            bomboni[i][j], bomboni[i][j+1] = bomboni[i][j+1], bomboni[i][j]
            check()
            bomboni[i][j], bomboni[i][j+1] = bomboni[i][j+1], bomboni[i][j]
        if i+1<n:
            bomboni[i][j], bomboni[i+1][j] = bomboni[i+1][j], bomboni[i][j]
            check()
            bomboni[i][j], bomboni[i+1][j] = bomboni[i+1][j], bomboni[i][j]
        
print(maxcandy)