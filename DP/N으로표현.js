// 거의 다풀엇음
// N을 1번쓰는 경우: 1번쓴 경우(5)
// N을 2번쓰는 경우: 1번쓴 경우 + 1번쓴경우
// N을 3번쓰는 경우: 1번쓴 경우 + 2번쓴경우, 2번쓴 경우 + 1번쓴경우,
// N을 4번쓰는 경우: 1번쓴 경우 + 3번쓴경우, 2번쓴 경우 + 2번쓴경우, 3번쓴 경우 + 1번쓴경우
// ....

function solution(N, number) {
  let answer = -1;
  let dp = new Array(8).fill().map((a) => new Set());

  for (let i = 0; i < 8; i++) {
    dp[i].add(Number(String(N).repeat(i + 1)));

    for (let j = 0; j < i; j++) {
      for (let arg1 of dp[j]) {
        for (let arg2 of dp[i - j - 1]) {
          dp[i].add(arg1 + arg2);
          dp[i].add(arg1 - arg2);
          dp[i].add(arg1 * arg2);
          dp[i].add(Math.floor(arg1 / arg2));
        }
      }
    }
    if (dp[i].has(number)) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}
