// 점화식: M[n][m] = M[n-1][m] + M[n][m-1]

function solution(m, n, puddles) {
  let dp = new Array(n).fill().map((a) => new Array(m).fill(0));
  dp[0][0] = 1;

  for (let [x, y] of puddles) {
    dp[y - 1][x - 1] = -1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (dp[i][j] === -1) continue;

      let top = 0;
      let left = 0;
      if (i - 1 >= 0 && dp[i - 1][j] !== -1) {
        top = dp[i - 1][j] % 1000000007;
      }
      if (j - 1 >= 0 && dp[i][j - 1] !== -1) {
        left = dp[i][j - 1] % 1000000007;
      }

      dp[i][j] = top + left;
    }
  }

  return dp[n - 1][m - 1] % 1000000007;
}
