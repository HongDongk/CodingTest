// 피보나치수열을 DP로 구현

function solution(n) {
  let answer = 0;
  let dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (var i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n - 1];
}
