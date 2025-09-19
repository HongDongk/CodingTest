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

class PriorityQueue {
  constructor(compare = (a, b) => a - b) {
    // compare: a<b이면 음수 → a가 더 높은 우선순위
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0] ?? null; // 루트 원소(최우선)
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = last;
      this._bubbleDown(0);
    }
    return top;
  }

  _bubbleUp(idx) {
    const { heap, compare } = this;
    while (idx > 0) {
      const parent = (idx - 1) >> 1;
      if (compare(heap[idx], heap[parent]) >= 0) break;
      [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
      idx = parent;
    }
  }

  _bubbleDown(idx) {
    const { heap, compare } = this;
    const n = heap.length;
    while (true) {
      let left = idx * 2 + 1;
      let right = left + 1;
      let smallest = idx;

      if (left < n && compare(heap[left], heap[smallest]) < 0) smallest = left;
      if (right < n && compare(heap[right], heap[smallest]) < 0) smallest = right;
      if (smallest === idx) break;
      [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
      idx = smallest;
    }
  }
}

// 우선순위 큐 사용

function solution(N, road, K) {
  let result = new Array(N + 1).fill(Infinity);
  result[1] = 0;
  let pq = new PriorityQueue();
  pq.push([0, 1]);

  let info = new Array(N + 1).fill(0).map((a) => []);

  for (let [a, b, c] of road) {
    info[a].push([b, c]);
    info[b].push([a, c]);
  }

  while (pq.size() > 0) {
    let [dist, current] = pq.pop();
    if (dist !== result[current]) continue;

    for (let [next, cost] of info[current]) {
      if (result[next] > dist + cost) {
        result[next] = dist + cost;
        pq.push([dist + cost, next]);
      }
    }
  }

  console.log(result);

  return result.filter((a) => a <= K).length;
}
