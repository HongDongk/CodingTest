function solution(people, limit) {
    let answer = 0;
    people.sort((a,b) => b-a);
    let a = 0;
    let b = people.length-1;
    
    while(a<b){
        if(people[a] + people[b]>limit){
            a++;        
        } else{
            a++;
            b--;
        }
        answer++;
    }
    
    if(a===b) answer++;
    
    return answer;
}