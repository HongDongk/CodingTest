// 모든조합 - DFS(재귀함수)

function solution(k, dungeons) {
  let answer = 0;
  let visited = new Array(dungeons.length).fill(false);

  function dfs(power, cnt) {
    answer = Math.max(answer, cnt);

    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= power && !visited[i]) {
        visited[i] = true;
        dfs(power - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);

  return answer;
}
