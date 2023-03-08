// while, for문을 실행할때 반복을 돌려도 조건에 일치하지않는경우가 있으면 반복문 뒤에 return을 써주면된다!! (if, else처럼..)

function solution(A, B) {
    if (A === B) return 0;

    let arr = A.split('');
    let count = 0;

    while (count < B.length) {
        count++
        arr.unshift(arr.pop());
        if (arr.join('') === B) {
            return count
        }
    }

    return -1;
}