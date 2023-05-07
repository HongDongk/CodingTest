// 길이가 a인 배열 생성 - new Array[a]
// 배열값을 x로 전부 채우기 - array.fill(a)
// map함수의 두가지인자 - map((a,b) => a+b) ===> a = 배열값, b = 인덱스 

function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2
    return new Array(num).fill(a).map((item, index) => item+index)
}
