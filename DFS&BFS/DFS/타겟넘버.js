// 모든조합 - DFS(재귀함수)
// 코드 순서 틀렷음(count < numbers.length)부터 해줘야됌

function solution(numbers, target) {
  let answer = 0;

  function dfs(count, value) {
    if (count < numbers.length) {
      dfs(count + 1, value + numbers[count]);
      dfs(count + 1, value - numbers[count]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }

  dfs(0, 0);

  return answer;
}
