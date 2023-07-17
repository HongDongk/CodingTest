// DFS(재귀함수)

function solution(storey) {
  let answer = 1000000;

  function dfs(num, counter) {
    if (counter >= answer) return;
    if (num === 0) {
      answer = counter;
    } else {
      let res = num % 10;

      // 층을 내려갔을 경우
      dfs(Math.floor(num / 10), counter + res);
      // 층을 올라갔을 경우
      dfs(Math.floor(num / 10) + 1, counter + 10 - res);
    }
  }

  dfs(storey, 0);

  return answer;
}
