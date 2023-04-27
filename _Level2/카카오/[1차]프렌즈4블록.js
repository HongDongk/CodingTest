// 어렵다,,, 상당히,, 이빠이

function solution(m, n, board) {
  board = board.map((a) => a.split(""));

  //1. 배열에서 지워질 블록의 인덱스를 구해 arr안에 넣는다.
  while (true) {
    let arr = [];
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

    // 답을 구하는 로직 : 깨질 블록이 없다면 0인 개수를 세고 리턴한다.
    if (arr.length === 0) {
      return board
        .map((a) => {
          return a.filter((b) => b === 0).length;
        })
        .reduce((a, b) => a + b, 0);
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
      if (!board[i].some((a) => !a)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}
