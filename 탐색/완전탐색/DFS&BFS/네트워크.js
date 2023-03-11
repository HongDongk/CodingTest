// 네트워크 - DFS(재귀함수)

function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let answer = 0;

    function dfs(i) {
        visited[i] = true;
        for(let j=0; j<computers[i].length; j++) {
            if(computers[i][j]===1 && !visited[j]){
                dfs(j);
            }
        }
    }
    
    for (let i=0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i)
            answer++;
        }
    }
    return answer;
}
