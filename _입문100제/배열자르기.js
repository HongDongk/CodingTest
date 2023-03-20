// 배열 자르기 - array.splice(1, 10) => 1번인덱스부터 9번인덱스까지 자름

function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);
}