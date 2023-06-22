function solution(expression) {
  let answer = [];

  function calculator(a, b, oper) {
    if (oper === "+") return a + b;
    if (oper === "*") return a * b;
    if (oper === "-") return a - b;
  }

  const combinations = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  for (let combination of combinations) {
    const numbers = expression.match(/\d+/g).map((a) => Number(a)); // 주어진 숫자
    const operators = expression.match(/[\*\+\-]/g); // 주어진 연산자

    for (let i of combination) {
      let idx = operators.indexOf(i);
      while (idx !== -1) {
        numbers[idx] = calculator(numbers[idx], numbers[idx + 1], i);
        numbers.splice(idx + 1, 1);
        operators.splice(idx, 1);
        idx = operators.indexOf(i);
      }
    }

    answer.push(Math.abs(numbers[0]));
  }

  return Math.max(...answer);
}
