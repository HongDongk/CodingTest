// 풀긴 풀엇음
// 다른사람 코드 참조필요!
// 무지성 탑다운

function solution(triangle) {
  let dp = new Array(triangle.length).fill().map((a) => []);
  dp[0] = triangle[0];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let max = 0;
      for (let w = j - 1; w < j + 1; w++) {
        if (dp[i - 1][w]) {
          max = Math.max(triangle[i][j] + dp[i - 1][w], max);
        }
      }
      dp[i].push(max);
    }
  }

  return Math.max(...dp[dp.length - 1]);
}

// 삼각형 아래에서 위로 가는방식이 더 간단함
// 바텀업
function solution(triangle) {
  let dp = triangle.slice();

  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}
