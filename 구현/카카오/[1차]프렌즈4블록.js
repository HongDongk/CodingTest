// 하나하나 차근히 구현하기!

function solution(m, n, board) {
  board = board.map((a) => a.split(""));
  let answer = 0;

  while (true) {
    let arr = [];

    //1. 배열에서 지워질 블록의 인덱스를 구해 arr안에 넣는다.
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          arr.push([i, j]);
        }
      }
    }

    if (arr.length === 0) {
      board.map((a) => (answer += a.filter((b) => b === 0).length));
      break;
    }

    // 2. 배열에서 지워질 블록을 0으로 바꾼다.
    for (let i = 0; i < arr.length; i++) {
      const col = arr[i][0];
      const row = arr[i][1];
      board[col][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row] = 0;
      board[col + 1][row + 1] = 0;
    }

    // 3. 깨진 블록을 없애고 위에서 블록을 당겨온다.
    for (let i = m - 1; i > 0; i--) {
      if (board[i].filter((a) => a !== 0).length === 0) continue; // 시간초과 방지용

      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j] !== 0) {
              board[i][j] = board[k][j];
              board[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  }

  return answer;
}
