// DFS
function solution(n, wires) {
  let answer = 100; // 최댓값

  // 와이어 연결 정보를 담을 graph
  let graph = new Array(n + 1).fill(0).map((a) => new Array(n + 1).fill(false));

  // 와이어 연결 정보 저장
  for (let wire of wires) {
    graph[wire[0]][wire[1]] = graph[wire[1]][wire[0]] = true;
  }

  function DFS(arr, node) {
    let res = 0;
    for (let i = 1; i <= arr[node].length; i++) {
      if (arr[node][i]) {
        arr[node][i] = arr[i][node] = false; // 연결되어 있다면 방문 처리
        res += 1 + DFS(arr, i);
      }
    }
    console.log(res, node);
    return res;
  }

  // 와이어를 하나씩 끊고 끊어진 각 노드 2개에 대하여 DFS수행 후의 차이를 계산
  for (let wire of wires) {
    const copy = graph.map((a) => a.slice());
    const [a, b] = wire;
    copy[a][b] = copy[b][a] = false;
    console.log(copy);
    answer = Math.min(answer, Math.abs(DFS(copy, a) - DFS(copy, b)));
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
