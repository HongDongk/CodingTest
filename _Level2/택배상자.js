function solution(order) {
  let stack = [];
  let answer = 0;
  for (let i = 1; i < order.length + 1; i++) {
    stack.push(i);
    while (stack.length > 0 && order[answer] === stack[stack.length - 1]) {
      stack.pop();
      answer++;
    }
  }

  return answer;
}
