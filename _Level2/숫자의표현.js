// 어떤 수를 연속된 자연수의 합으로 표현하는 방법의 수는 어떤 수의 홀수인 약수의 갯수와 같다.

function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}
