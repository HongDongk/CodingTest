# 풀수있는건데 너무어렵게 생각한다.. 

E,S,M,year = 1,1,1,1
e,s,m = map(int,input().split())
while True:
    if (E==e and S==s and M==m):
        break
    E+=1
    S+=1
    M+=1
    year+=1
    if E>15: 
        E-=15
    if S>28: 
        S-=28
    if M>19: 
        M-=19
        
print(year)