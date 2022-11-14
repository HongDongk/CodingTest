# 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 
# 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 
# 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.


#DFS 풀이
answer = 0 

def dfs(numbers, target, idx, value):
    global answer
    if idx == len(numbers):
        if target == value:
            answer+=1
            return answer
    else:
        dfs(numbers, target, idx+1, value+numbers[idx])
        dfs(numbers, target, idx+1, value-numbers[idx])
        
def solution(numbers, target):
    global answer
    dfs(numbers, target, 0, 0)
    
    return answer

# BFS 풀이
from collections import deque

def bfs(x,y, maps):
    queue = deque()
    queue.append((x,y))
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    while queue:
        x,y = queue.popleft()  
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx<0 or ny<0 or nx>=len(maps) or ny>=len(maps[0]):
                continue
            if maps[nx][ny] == 0:
                continue
            if maps[nx][ny] == 1:
                maps[nx][ny] = maps[x][y] + 1
                queue.append((nx,ny))
    return maps[-1][-1]

def solution(maps): 
    
    answer = bfs(0,0,maps)
    if answer == 1:
        return -1
    else:
        return answer