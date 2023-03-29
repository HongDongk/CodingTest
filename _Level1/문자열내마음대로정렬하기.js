// sort() - 리턴값이 음수인경우 a를 b보다 먼저, 
//          리턴값이 양수인경우 b를 a보다 먼저, 
//          리턴값이 0인경우 위치변경 X

function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1; 
        if(a[n] === b[n]){
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        }
    });
    
    return answer;
}