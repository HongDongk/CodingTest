// 짝수일때와 홀수일때로 나눠서 풀기
// 이진수에 대한 이해

function solution(numbers) {
  function findmin(n) {
    if (n % 2 === 0) return n + 1;
    n = "0" + n.toString(2);
    let idx = n.lastIndexOf("0");
    return parseInt(n.slice(0, idx) + "10" + n.slice(idx + 2), 2);
  }

  return numbers.map((a) => findmin(a));
}
