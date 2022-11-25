# 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

# 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
# 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
# 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

# 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 
# 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

def solution(genres, plays):
    answer = {}
    answer2 ={}
    result = []
    for i in range(len(genres)):
        if genres[i] in answer:
            answer[genres[i]] += plays[i]
            answer2[genres[i]].append((plays[i],i))
        else:
            answer[genres[i]] = plays[i]
            answer2[genres[i]] = [(plays[i],i)]
            
    
    biggest = sorted(answer.items(), key=lambda x: x[1], reverse=True)
    
    for i in biggest:
        a = answer2[i[0]]
        a.sort(key=lambda x: x[0], reverse=True)
        for j in range(len(a)):
            if j == 2:
                break
            else:
                result.append(a[j][1])
                
    return result