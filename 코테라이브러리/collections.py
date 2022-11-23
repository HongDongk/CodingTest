# deque (BFS 문제) - 데큐
# 큐구현할 때 사용
from collections import deque

answer = deque([2 , 3, 4])

answer.append(5) # 맨마지막에 원소 추가  - deque([2, 3, 4, 5])
answer.popleft() # 맨첫번째 원소 제거 - deque([3, 4])


# 원소갯수 파악하기
# 배열에 원소갯수 파악할때 주로사용
from collections import Counter

answer = Counter([1, 1, 2, 3, 3])

answer[1] # 배열안에서 1이 몇개인지 파악 - 2
answer[2] # 배열안에서 2가 몇개인지 파악 - 1



