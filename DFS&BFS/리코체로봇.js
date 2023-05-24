// BFS(큐)
// 특별한 이동방식

function solution(board) {
  let answer = 0;
  board = board.map((a) => a.split(""));
  let start = [];

  board.forEach((items, i) => {
    items.forEach((item, j) => {
      if (item === "R") start = [i, j];
    });
  });

  const q = [start];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (q.length) {
    const size = q.length;

    for (let i = 0; i < size; i++) {
      const [x, y] = q.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        // 미끄러지기
        while (
          nx >= 0 &&
          nx < board.length &&
          ny >= 0 &&
          ny < board[0].length &&
          board[nx][ny] !== "D"
        ) {
          nx += dx[j];
          ny += dy[j];
        }

        nx -= dx[j];
        ny -= dy[j];

        if (board[nx][ny] === "G") {
          return answer + 1;
        }
        // 왜 .으로 안하고 'O'로하는지 이해안됌
        if (board[nx][ny] !== "O") {
          board[nx][ny] = "O";
          q.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}
