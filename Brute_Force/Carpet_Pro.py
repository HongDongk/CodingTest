# Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

# Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.


# 입출력 예
#  brown	 yellow	   return
#   10	       2	   [4, 3]
#   8	       1	   [3, 3]
#   24	       24	   [8, 6]

def solution(brown, yellow):
    sum = brown + yellow
    
    for i in range(3,brown//2):
        if((i-2)*(brown//2-i) == yellow):
            return[brown//2-i+2, i]