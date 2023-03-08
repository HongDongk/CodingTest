// forEach 사용방법 - array.forEach((a) => {})
// 특이점 - 다른 for문과 달리 forEach구문안에서 return 값을 쓸수 없다!!

function solution(spell, dic) {
    let answer = [];
    
    dic.forEach((word) => {
        let count = 0;
        spell.forEach((a) => {
            if (word.includes(a)){
                count+=1
            }
        })
        if (count === spell.length){
            answer.push(word);
        }
    })
    
    return answer.length === 0 ? 2 : 1
}