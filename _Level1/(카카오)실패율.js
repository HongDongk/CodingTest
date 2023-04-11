// 객체생성방법 - array.push({a: 1, b:2});

function solution(N, stages) {
    let answer = [];
    
    for(let i =1; i<=N; i++){
        let total = 0;
        let fail = 0;
        for(let j of stages){
            if(j===i){
                fail++;
            }
            if(j>=i){
                total++;
            }
            
        }
        answer.push({idx:i, ratio:(fail/total)});
    }
    
    return answer.sort((a,b) => b.ratio - a.ratio).map((a) => a.idx);
}