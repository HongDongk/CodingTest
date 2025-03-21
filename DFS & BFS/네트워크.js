// DFS

function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let answer = 0;

  function dfs(L) {
    for (let i = 0; i < n; i++) {
      if (computers[L][i] === 1 && !visited[i]) {
        visited[i] = true;
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      dfs(i);
      answer++;
    }
  }

  return answer;
}
