# 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
# 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

# 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
# 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
# 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

# 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

def solution(answers):
    answer = []
    math1 = [1,2,3,4,5]
    math2 = [2,1,2,3,2,4,2,5]
    math3 = [3,3,1,1,2,2,4,4,5,5]
    count1, count2, count3 = 0

    for i in range(len(answers)):
        a = i%5
        b = i%8
        c = i%10
        if math1[a] == answers[i]:
            count1 += 1
        if math2[b] == answers[i]:
            count2 += 1
        if math3[c] == answers[i]:
            count3 += 1
    
    big = max(count1, count2, count3)
    
    if big == count1:
        answer.append(1)
    if big == count2:
        answer.append(2)
    if big == count3:
        answer.append(3)
        
    return answer

# enumerate사용
def solution(answers):
    math1 = [1,2,3,4,5]
    math2 = [2,1,2,3,2,4,2,5]
    math3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0,0,0]
    result = []

    for idx, answer in enumerate(answers):
        if answer == math1[idx%len(math1)]:
            score[0] += 1
        if answer == math2[idx%len(math2)]:
            score[1] += 1
        if answer == math3[idx%len(math3)]:
            score[2] += 1

    for idx, s in enumerate(score):
        if s == max(score):
            result.append(idx+1)
    
    return result




