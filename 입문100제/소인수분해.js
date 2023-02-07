// 배열에서 중복을 제거하기 - new Set(array)  
// [...new Set(array)]를 해줘야 배열상태의 결과값을 볼 수 있음 

function solution(n) {
    let answer = [];
    let idx = 2;
    while (n != 1){
        if (n%idx == 0){
            answer.push(idx)
            n/=idx
        }
        else{
            idx++;
        }
    }
    return [...new Set(answer)];
}