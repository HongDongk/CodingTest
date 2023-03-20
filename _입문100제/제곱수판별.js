// 정수인지아닌지 - isInteger()
// 제곱근 반환 - Math.sqrt()

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}