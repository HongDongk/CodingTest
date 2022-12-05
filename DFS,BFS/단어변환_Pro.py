# 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 
# 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

# 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
# 2. words에 있는 단어로만 변환할 수 있습니다.

# 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 
# "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

# 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.


def check(i,j):
    count = 0
    for a in range(len(i)):
        if i[a] != j[a]:
            count +=1
    if count == 1:
        return True
    else:
        return False

def solution(begin, target, words):
    
    results = []
    
    if target not in words:
        return 0
    
    visited = [False] * len(words)

    def dfs(word,cnt):
        
        if word == target:
            results.append(cnt)
        
        for i in range(len(words)):
            if visited[i] == False and check(word,words[i]):
                visited[i] = True
                d3fs(words[i],cnt+1)
                visited[i] = False
    
    dfs(begin,0)
    
    answer = min(results)
    return answer


