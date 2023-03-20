// 유사배열
// 밑에 winning은 배열처럼 보이는 객체이다!! 따라서 length를 쓸수 없고, key값이 타입이 있으므로 winning[]으로 불러와야 한다.


function solution(rsp) {
    winning = {
        '0' : '5',
        '2' : '0',
        '5' : '2',
    }
    
    return [...rsp].map((a) => winning[a]).join('')
}