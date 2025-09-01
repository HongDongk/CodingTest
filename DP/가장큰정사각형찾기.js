function solution(board) {
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          1 + Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]);
      }
    }
  }

  let max = Math.max(...board.map((a) => Math.max(...a)));

  return max * max;
}
