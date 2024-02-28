function solution(tickets) {
  let use = new Array(tickets.length).fill(false);
  let answer = [];

  function DFS(path) {
    if (path.length === tickets.length + 1) {
      answer.push(path.slice()); // 얖은복사 주의!!!!!
    } else {
      for (let i = 0; i < tickets.length; i++) {
        if (path[path.length - 1] === tickets[i][0] && !use[i]) {
          use[i] = true;
          path.push(tickets[i][1]);
          DFS(path);
          path.pop();
          use[i] = false;
        }
      }
    }
  }

  DFS(['ICN']);

  return answer.sort()[0];
}
