// 문제를 잘읽고 분석필요

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let i of moves) {
    let now = i - 1;
    for (let j of board) {
      if (j[now] !== 0) {
        if (stack[stack.length - 1] === j[now]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(j[now]);
        }
        j[now] = 0;
        break;
      }
    }
  }

  return answer;
}
