# 두 큐에 담긴 모든 원소의 합은 30입니다. 따라서, 각 큐의 합을 15로 만들어야 합니다. 
# 예를 들어, 다음과 같이 2가지 방법이 있습니다.

# 1. queue2의 4, 6, 5를 순서대로 추출하여 queue1에 추가한 뒤, queue1의 3, 2, 7, 2를 순서대로 추출하여 queue2에 추가합니다. 
#    그 결과 queue1은 [4, 6, 5], queue2는 [1, 3, 2, 7, 2]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 7번 수행합니다.
# 2. queue1에서 3을 추출하여 queue2에 추가합니다. 그리고 queue2에서 4를 추출하여 queue1에 추가합니다. 
#    그 결과 queue1은 [2, 7, 2, 4], queue2는 [6, 5, 1, 3]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 2번만 수행하며, 이보다 적은 횟수로 목표를 달성할 수 없습니다.
#    따라서 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수는 2입니다.

# 길이가 같은 두 개의 큐를 나타내는 정수 배열 queue1, queue2가 매개변수로 주어집니다. 
# 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수를 return 하도록 solution 함수를 완성해주세요. 
# , 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.


from collections import deque

def solution(queue1, queue2):
    answer = 0
    queue1 = deque(queue1)
    queue2 = deque(queue2)
    limit = (len(queue1)) * 4
    sum1 = sum(queue1)
    sum2 = sum(queue2)
    
    while True:
        if sum1>sum2:
            a = queue1.popleft()
            queue2.append(a)
            sum1 -= a
            sum2 += a
            answer+=1
        elif sum1<sum2:
            b = queue2.popleft()
            queue1.append(b)
            sum1 += b
            sum2 -= b
            answer+=1
        else:
            break
        if answer >= limit:
            answer = -1
            break
            
    return answer