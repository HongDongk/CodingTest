// 객체를 이용해서 풀기!!

function solution(n, lost, reserve) {
    let student = {};
    let answer = 0;
    
    for(let i =1; i<=n; i++){
        student[i] = 1;
    }
    
    lost.forEach((a) => student[a] -= 1);
    reserve.forEach((a) => student[a] += 1);
    
    for(let i=1; i<=n; i++){
        if(student[i] === 2 && student[i-1] === 0){
            student[i-1]+=1;
            student[i]-=1;
        }
        else if(student[i] === 2 && student[i+1] === 0){
            student[i+1]+=1;
            student[i]-=1;
        }
    }
    
    for(let i in student){
        if (student[i] >= 1){
            answer++;
        }
    }
    
    return answer;
}