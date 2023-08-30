// DFS(재귀함수)

// answer = {"":0,"A":1,"AA":2,"AAA":3,"AAAA":4,"AAAAA":5,"AAAAE":6,"AAAAI":7,"AAAAO":8,"AAAAU":9,"AAAE":10,"AAAEA":11,"AAAEE":12,"AAAEI":13}

function solution(word) {
  let idx = 0;
  let answer = {};
  const alphabet = ["A", "E", "I", "O", "U"];

  function dfs(count, word) {
    if (count > 5) return;
    answer[word] = idx++;
    for (let i of alphabet) {
      dfs(count + 1, word + i);
    }
  }

  dfs(0, "");

  return answer[word];
}
