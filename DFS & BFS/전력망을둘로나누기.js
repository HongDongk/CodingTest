// DFS
function solution(n, wires) {
  let answer = 100;
  let visited = new Array(n + 1).fill(false);
  let count = 1;
  let graph = new Array(n + 1).fill(0).map((a) => new Array(n + 1).fill(false));
  for (let [a, b] of wires) {
    graph[a][b] = true;
    graph[b][a] = true;
  }
  function DFS(L) {
    for (let i = 1; i <= n; i++) {
      if (visited[i] === false && graph[L][i] === true) {
        visited[L] = true;
        count++;
        DFS(i);
        visited[L] = false;
      }
    }
    console.log('실행 끝', L, visited);
  }

  for (let [a, b] of wires) {
    console.log([a, b]);
    graph[a][b] = false;
    graph[b][a] = false;
    count = 1;
    DFS(1);
    graph[a][b] = true;
    graph[b][a] = true;
    answer = Math.min(answer, Math.abs(count - (n - count)));
  }
  return answer;
}

// BFS
function solution(n, wires) {
  let links = {};
  let answer = 100;

  wires.map((a) => {
    if (!links[a[0]]) links[a[0]] = [];
    if (!links[a[1]]) links[a[1]] = [];
    links[a[0]].push(a[1]);
    links[a[1]].push(a[0]);
  });

  function searchtree(x, y) {
    let count = 0;
    let visited = [];
    let array = [x];
    visited[x] = true;

    while (array.length > 0) {
      const next = array.pop();
      links[next].map((a) => {
        if (a !== y && !visited[a]) {
          visited[a] = true;
          array.push(a);
        }
      });
      count++;
    }
    return count;
  }

  wires.map((a) => {
    const count = Math.abs(searchtree(a[0], a[1]) - searchtree(a[1], a[0]));
    answer = answer > count ? count : answer;
  });

  return answer;
}
