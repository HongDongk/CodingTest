// DFS

function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let answer = 0;

  function dfs(i) {
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      if (visited[j] === false && computers[i][j] === 1) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
