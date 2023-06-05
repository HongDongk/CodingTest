// 숫자간의 차이가 작을수록 곱은 커진다!!

function solution(n, s) {
  if (n > s) return [-1];
  const mid = Math.floor(s / n);
  const answer = new Array(n).fill(mid);

  for (let i = 0; i < s % n; i++) {
    answer[answer.length - 1 - i]++;
  }

  return answer;
}
