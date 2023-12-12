// 모든조합 - DFS(재귀함수)

function solution(tickets) {
  let answer = [];

  function dfs(t, start, path) {
    if (t.length === 0) {
      answer.push(path);
    }

    for (let i in t) {
      if (t[i][0] === start) {
        let t1 = t.slice();
        let t2 = path.slice();
        t1.splice(i, 1); 
        t2.push(t[i][1]); 
        dfs(t1, t[i][1], t2);
      }
    }
  }

  dfs(tickets, "ICN", ["ICN"]);

  return answer.sort()[0];
}
