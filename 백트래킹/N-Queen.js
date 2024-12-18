function solution(n) {
  let answer = 0;
  let queens = [];

  function check(x, y) {
    for (let i = 0; i < queens.length; i++) {
      if (x === queens[i][0] || y === queens[i][1]) return false; // 행이나 열이 같다면 놓을 수 없음
      if (Math.abs(x - queens[i][0]) === Math.abs(y - queens[i][1])) return false; // 대각선에 위치한 경우 놓을 수 없음
    }
    return true;
  }

  function DFS(L) {
    if (L === n) {
      answer++;
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (check(L, i)) {
          queens.push([L, i]);
          DFS(L + 1);
          queens.pop();
        }
      }
    }
  }

  DFS(0);
  return answer;
}
