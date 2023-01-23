// Map 사용하기(객체를 팬시하게만들어줌) - set으로 키, 값입력 get으로 값 불러오기
// [...m]으로 Map객체 배열로 바꿀 수 잇음
// 내림차순정리하는법

function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    if (m.length === 1 || m[0][1] > m[1][1]) return m[0][0]
    else return -1
}