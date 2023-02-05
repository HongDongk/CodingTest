// 배열 첫번째 원소 빼기 - array.shift()
// 배열 마지막 원소 빼기 - array.pop()
// 배열 처음에 값 넣기 - array.unshift()
// 배열 마지막에 값 넣기 - array.push()

function solution(numbers, direction) {
    if (direction == "right"){
        numbers.unshift(numbers.pop())
    }
    else{
        numbers.push(numbers.shift())
    }
    return numbers;
}