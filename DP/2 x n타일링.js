// 타일을 채워나가는 규칙을 살펴보면 피보나치수열과 같다.
// 피보나치수열을 dp로 구현

function solution(n) {
  let dp = [1, 2];

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n - 1];
}
