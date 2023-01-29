// 배열복사할땐 - [...array]
// 배열의 index값 - array.indexOf(a)

function solution(emergency) {
    const copie = [...emergency].sort((a,b) => b-a); //복사한후 내림차순
    
    return emergency.map((a) => a = copie.indexOf(a)+1);
}