// 풀긴 풀엇음
// 다른사람 코드 참조필요!

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
