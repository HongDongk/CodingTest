function solution(answers) {
    let answer = [];
    const first = [1, 2, 3, 4, 5];                      
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0,0,0]
    
    for (let i = 0; i < answers.length; i++) {
        if (first[i % 5] === answers[i]) score[0]++;
        if (second[i % 8] === answers[i]) score[1]++;
        if (third[i % 10] === answers[i]) score[2]++;
    }
    
    for (let i in score){
        if (score[i] === Math.max(...score)){
            answer.push(parseInt(i)+1);
        }
    }
    
    return answer;
    
}