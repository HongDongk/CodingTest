// 유사배열
// 밑에 winning은 배열처럼 보이는 객체이다!! 유사배열 따라서 winning[a]로 불러야 값을 얻을수있다!

function solution(rsp) {
    winning = {
        '0' : '5',
        '2' : '0',
        '5' : '2',
    }
    
    return [...rsp].map((a) => winning[a]).join('')
}