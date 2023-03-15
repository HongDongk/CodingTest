// 재귀함수

function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false);
    
    function dfs(power,cnt) {
        answer = Math.max(answer,cnt);
        
        for (let n in dungeons){
            if(dungeons[n][0]<=power && !visited[n]){
                visited[n] = true;
                dfs(power-dungeons[n][1], cnt+1);
                visited[n] = false;
            }
        }
    }
    
    dfs(k,0);
    
    return answer;
}