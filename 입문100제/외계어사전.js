// forEach 사용방법 - array.forEach((a) => {})

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