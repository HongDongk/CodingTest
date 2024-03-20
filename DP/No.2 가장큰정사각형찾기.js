// (왼쪽, 왼쪽위대각선, 위쪽의 최솟값) + 1 => 해당 index에서의 최대정사각형넓이

function solution(board) {
  let answer = 0;
  if (row <= 1 || column <= 1) return 1;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        const minNum = Math.min(up, left, cross);
        board[i][j] = minNum + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;
}
