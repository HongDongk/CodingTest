// 네트워크 - DFS(재귀함수)

function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let answer = 0;
    
    function dfs(i) {
        visited[i] = true;
        for (let j=0; j<computers[i].length; j++){
            if(visited[j] === false && computers[i][j] ===1 ){
                dfs(j);
            }
        }
    }
    
    for (let i in computers){
        if(visited[i] === false){
            dfs(i);
            answer+=1;
        }
    }
    
    return answer;
}
