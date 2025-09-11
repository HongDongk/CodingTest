function solution(N, road, K) {
  let result = new Array(N + 1).fill(Infinity);
  let info = new Array(N + 1).fill(0).map((a) => []);
  let visited = new Array(N + 1).fill(false);

  result[1] = 0;

  for (let r of road) {
    info[r[0]].push([r[1], r[2]]);
    info[r[1]].push([r[0], r[2]]);
  }

  for (let i = 1; i <= N; i++) {
    let u = -1;
    let min = Infinity;

    for (let j = 1; j <= N; j++) {
      if (!visited[j] && result[j] < min) {
        min = result[j];
        u = j;
      }
    }

    if (u === -1) break;
    visited[u] = true;

    for (let a of info[u]) {
      if (!visited[a[0]] && result[a[0]] > min + a[1]) {
        result[a[0]] = min + a[1];
      }
    }
  }

  return result.filter((a) => a <= K).length;
}
