function solution(N, road, K) {
  let arr = new Array(N + 1).fill(Infinity);
  let lines = new Array(N + 1).fill(0).map((a) => []);

  for (let value of road) {
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  }

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    queue.sort((a, b) => b.cost - a.cost); // 최소 비용 기준 정렬 (우선순위 큐 Min-Heap)
    let current = queue.pop(); // BFS랑 다르게 pop한다!

    if (arr[current.to] < current.cost) continue;

    for (let line of lines[current.to]) {
      if (arr[line.to] > arr[current.to] + line.cost) {
        arr[line.to] = arr[current.to] + line.cost;
        queue.push(line);
      }
    }
  }

  return arr.filter((v) => v <= K).length;
}
