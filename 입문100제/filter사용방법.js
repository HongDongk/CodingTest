// 배열안에서 원하는 조건의 값들 반환 - array.filter((a) => a<1) (1보다 작은 원소 배열로반환)

function solution(array, height) {
    return array.filter((a) => a>height).length
}