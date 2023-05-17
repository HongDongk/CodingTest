// DFS(재귀함수)

function solution(word) {
  let arr = ["A", "E", "I", "O", "U"];
  let idx = 0;
  let answer = {};

  function dfs(word, count) {
    if (count > 5) return;
    answer[word] = idx++;
    for (let i of arr) {
      dfs(word + i, count + 1);
    }
  }

  dfs("", 0);

  return answer[word];
}
