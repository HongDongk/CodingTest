// DFS
// 1. n-1개의 원반을 시작 탑에서 가운데 탑에 옮기기.
// 2. n 번째 원반을 시작 탑에서 목표 탑에 옮기기.
// 3. 가운데 탑의 n-1개의 원반을 목표 탑에 옮기기.

function solution(n) {
  let answer = [];
  function dfs(n, start, mid, end) {
    if (n === 1) answer.push([start, end]); // 하나 남았을 때!
    else {
      dfs(n - 1, start, end, mid); // 1
      answer.push([start, end]); // 2
      dfs(n - 1, mid, start, end); // 3
    }
  }

  dfs(n, 1, 2, 3);

  return answer;
}
