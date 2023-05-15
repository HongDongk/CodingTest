function solution(rows, columns, queries) {
  let answer = [];
  let board = new Array(rows).fill().map((a) => new Array(columns));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 기본보드 만들기
      board[i][j] = i * columns + j + 1;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i].map((a) => a - 1);
    const queue = [];
    for (let i = y1; i < y2; i++) queue.push(board[x1][i]);
    for (let i = x1; i < x2; i++) queue.push(board[i][y2]);
    for (let i = y2; i > y1; i--) queue.push(board[x2][i]);
    for (let i = x2; i > x1; i--) queue.push(board[i][y1]);

    queue.unshift(queue.pop());
    answer.push(Math.min(...queue));

    for (let i = y1; i < y2; i++) board[x1][i] = queue.shift();
    for (let i = x1; i < x2; i++) board[i][y2] = queue.shift();
    for (let i = y2; i > y1; i--) board[x2][i] = queue.shift();
    for (let i = x2; i > x1; i--) board[i][y1] = queue.shift();
  }

  return answer;
}
