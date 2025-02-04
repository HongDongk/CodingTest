// 2025/02/04

function solution(number, k) {
  let stack = [];

  for (let num of number) {
    while (stack.length > 0 && k > 0 && Number(stack[stack.length - 1] < Number(num))) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.join('');
}
