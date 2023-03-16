// 재귀함수!!

function solution(word) {
    let res = {};
    let idx = 0;
    let arr = ["A", "E", "I", "O", "U"];
    
    function dfs(now, cnt) {
        if(cnt>5)   return;
        res[now] = idx++;
        for(let i=0; i<5; i++){
            let next = now + arr[i];
            dfs(next, cnt+1);
        }
    }

    dfs("", 0);
    
    return res[word];
}