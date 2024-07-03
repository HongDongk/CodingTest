function solution(expression) {
  let answer = 0;

  function calculator(a, b, oper) {
    if (oper === '+') return a + b;
    if (oper === '*') return a * b;
    if (oper === '-') return a - b;
  }

  const combinations = [
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];

  for (let combination of combinations) {
    let numbers = expression.match(/\d+/g).map((a) => Number(a)); // 숫자
    let operator = expression.match(/\D+/g); // 연산자

    for (let i of combination) {
      let idx = operator.indexOf(i);
      while (idx !== -1) {
        numbers[idx] = calculator(numbers[idx], numbers[idx + 1], i);
        numbers.splice(idx + 1, 1);
        operator.splice(idx, 1);
        idx = operator.indexOf(i);
      }
    }
    answer = Math.max(answer, Math.abs(numbers[0]));
  }

  return answer;
}
