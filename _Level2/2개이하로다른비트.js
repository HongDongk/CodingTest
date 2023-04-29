// 2진수를 10진수로 parseInt(n,2);

function solution(numbers) {
  let answer = [];

  function f(x) {
    if (x % 2 === 0) return x + 1;
    let bit = "0" + x.toString(2);
    let idx = bit.lastIndexOf("0");
    return parseInt(bit.slice(0, idx) + "10" + bit.slice(idx + 2), 2);
  }

  for (let number of numbers) {
    answer.push(f(number));
  }

  return answer;
}
