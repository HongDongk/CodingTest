// 모든조합 - DFS(재귀함수)
// 값을 배열에 다 넣어서 Math.max하면 시간초과남
// 해결, 인자로 n을 넘겨주면 좀 더 쉽게 답을 구할 수 잇다!

function solution(k, dungeons) {
  let answer = 0;
  let visited = new Array(dungeons.length).fill(false); // 방문했는지 안했는지 확인필요!

  function dfs(k, n) {
    answer = Math.max(answer, n);

    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= k && !visited[i]) {
        visited[i] = true;
        dfs(k - dungeons[i][1], n + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);

  return answer;
}
