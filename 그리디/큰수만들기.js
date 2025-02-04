// 2025/02/04

function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < number[i] && k > 0) {
      k--;
      stack.pop();
    }
    stack.push(number[i]);
  }

  // 숫자가 모두 같을 때 (777, 8888)
  return stack.slice(0, number.length - k).join('');
}
