function solution(n) {
  let answer = 0;
  let queens = [];

  function possible(x, y) {
    // (x, y) 위치에 퀸을 놓을 수 있는지 확인
    for (let [a, b] of queens) {
      if (a == x || b == y) return false; // 행이나 열이 같다면 놓을 수 없음
      if (Math.abs(a - x) == Math.abs(b - y)) return false; // 대각선에 위치한 경우 놓을 수 없음
    }
    return true;
  }

  function DFS(row) {
    if (row == n) answer += 1;
    for (let i = 0; i < n; i++) {
      if (possible(row, i)) {
        queens.push([row, i]);
        DFS(row + 1);
        queens.pop();
      }
    }
  }
  DFS(0);
  return answer;
}
