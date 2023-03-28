// 배열의 모든 원소조건확인방법 - array.every((a) => !isNanN(a)) => array의 배열의 모든 원소가 숫자면 true

function solution(s) {
    if(s.length === 4 || s.length === 6){
        return s.split("").every((a) => !isNaN(a));
    } else {
        return false;
    }
}