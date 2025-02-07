// 2025.02.07

function solution(N, number) {
  let answer = -1;
  let dp = new Array(9).fill().map((a) => new Set());

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      for (let arg1 of dp[j]) {
        for (let arg2 of dp[i - j]) {
          dp[i].add(arg1 + arg2);
          dp[i].add(arg1 - arg2);
          dp[i].add(arg1 * arg2);
          dp[i].add(Math.floor(arg1 / arg2));
        }
      }
    }
    if (dp[i].has(number)) return (answer = i);
  }

  return answer;
}
