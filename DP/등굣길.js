// 오른쪽, 아래쪽으로만 이동가능하기 때문에 dp 사용가능

function solution(m, n, puddles) {
  let dp = new Array(m + 1).fill(0).map((a) => new Array(n + 1).fill(0));
  dp[1][1] = 1;

  for (let puddle of puddles) {
    dp[puddle[0]][puddle[1]] = -1;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        if (i > 1) dp[i][j] += dp[i - 1][j];
        if (j > 1) dp[i][j] += dp[i][j - 1];
      }

      dp[i][j] = dp[i][j] % 1000000007;
    }
  }

  return dp[m][n];
}
