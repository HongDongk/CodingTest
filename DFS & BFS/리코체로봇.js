// BFS

function solution(board) {
  let start = [];
  board = board.map((a) => a.split('')); // 문자열은 직접 수정할 수 없으므로 배열로변환해야됌!
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') start = [i, j];
    }
  }

  let answer = 0;
  let queue = [start];
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  board[start[0]][start[1]] = 'O';

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [cx, cy] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = cx + dx[j];
        let ny = cy + dy[j];

        while (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length && board[nx][ny] !== 'D') {
          nx += dx[j];
          ny += dy[j];
        }

        nx -= dx[j];
        ny -= dy[j];

        if (board[nx][ny] === 'G') {
          return answer + 1;
        }

        if (board[nx][ny] !== 'O') {
          board[nx][ny] = 'O';
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}
