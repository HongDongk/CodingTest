// 점화식: M[n][m] = M[n-1][m] + M[n][m-1]

function solution(m, n, puddles) {
    let dp = new Array(n).fill().map((a) => new Array(m).fill(0));
    dp[0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 && j === 0) continue; // 첫번째 위치 제외
            if (puddles.some(([x, y]) => x === j + 1 && y === i + 1)) {
                dp[i][j] = 0; // 웅덩이일때 0으로 설정
            } else {
                dp[i][j] = ((i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0)) % 1000000007;
            }
        }
    }

    return dp[n - 1][m - 1];
}
