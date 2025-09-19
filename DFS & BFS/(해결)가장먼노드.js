// BFS

function solution(n, edge) {
  let visited = new Array(n + 1).fill(false);
  let queue = [1];
  visited[1] = true;

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      for (let e of edge) {
        if (e[0] === current && !visited[e[1]]) {
          visited[e[1]] = true;
          queue.push(e[1]);
        } else if (e[1] === current && !visited[e[0]]) {
          visited[e[0]] = true;
          queue.push(e[0]);
        }
      }
    }

    if (queue.length === 0) {
      return len;
    }
  }
}
