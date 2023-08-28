// DFS(재귀함수)

function solution(storey) {
  let answer = 1000000;

  function dfs(current, count) {
    if (count >= answer) return;
    if (current === 0) {
      answer = count;
    } else {
      let res = current % 10;
      dfs(Math.floor(current / 10), count + res);
      dfs(Math.floor(current / 10) + 1, count + 10 - res);
    }
  }

  dfs(storey, 0);

  return answer;
}
