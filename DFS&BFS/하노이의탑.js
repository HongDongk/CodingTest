// DFS(재귀함수)

function solution(n) {
  let answer = [];
  function dfs(n, start, mid, end) {
    if (n === 1) answer.push([start, end]);
    else {
      dfs(n - 1, start, end, mid);
      answer.push([start, end]);
      dfs(n - 1, mid, start, end);
    }
  }

  dfs(n, 1, 2, 3);

  return answer;
}
