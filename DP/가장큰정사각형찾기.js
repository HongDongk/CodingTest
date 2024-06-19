// 해당 index에서의 최대정사각형넓이 : (왼쪽, 왼쪽위대각선, 위쪽의 최솟값) + 1

function solution(board) {
  if (board.length <= 1 || board[0].length <= 1) return 1;

  let max = 0;
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + 1;
      }
      max = Math.max(max, board[i][j]);
    }
  }

  return max * max;
}
