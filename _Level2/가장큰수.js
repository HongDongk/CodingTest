// Lv2 정렬
// 앞의 문자와 뒤의 문자(a,b)를 각각 더해 비교

function solution(numbers) {
  numbers = numbers.map((a) => String(a));
  let answer = numbers.sort((a, b) => b + a - (a + b)).join('');

  return answer[0] === '0' ? '0' : answer;
}
