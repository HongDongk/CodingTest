// 배열은 배열안의 값이 서로 같더라도 같지않다!!! ex) a=[1,2] b=[1,2] 일때 a == b는 false

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ?  1 :  0
}