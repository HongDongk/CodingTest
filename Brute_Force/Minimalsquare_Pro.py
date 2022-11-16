# 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.  
# 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

# 번호	가로 길이  세로 길이
#  1	  60	     50 
#  2	  30	     70
#  3	  60	     30
#  4	  80	     40

# 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
# 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
# 이때의 지갑 크기는 4000(=80 x 50)입니다.
# 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
# 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

# 첫번째풀이
def solution(sizes):
    
    big = []
    small = []

    for i in range(len(sizes)):
        if(sizes[i][0] > sizes[i][1]):
            big.append(sizes[i][0])
            small.append(sizes[i][1])
        else:
            big.append(sizes[i][1])
            small.append(sizes[i][0])
    
    return max(big) * max(small)

# 간단한 풀이
def solution(sizes):

    answer = max( max(i) for i in sizes ) * max( min(i) for i in sizes)  
    
    return answer;




