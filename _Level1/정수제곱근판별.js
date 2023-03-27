// 정수인지아닌지 판별 - Number.isInteger(n)
// 제곱근 - Math.sqrt(n)

function solution(n) {
    if(Number.isInteger(Math.sqrt(n))){
       return (Math.sqrt(n)+1) ** 2;
    } else{
        return -1;
    }
}