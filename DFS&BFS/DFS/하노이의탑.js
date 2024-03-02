// 1. n-1개의 원반 탑을 가운데 고리에 옮기기.
// 2. n번째 원반을 오른쪽 기둥에 옮기기.
// 3. 가운데에 있는 n-1개의 원반 탑을 오른쪽 기둥에 옮기기.

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
