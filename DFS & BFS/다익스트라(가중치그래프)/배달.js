function solution(N, road, K) {
  // 1. 그래프 만들기 (양방향)
  const g = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, c] of road) {
    g[a].push([b, c]); // a -> b 가중치 c
    g[b].push([a, c]); // b -> a 가중치 c
  }

  // 2. 거리 배열(dist), 방문 체크 배열(visited)
  const dist = Array(N + 1).fill(Infinity);
  const visited = Array(N + 1).fill(false);
  dist[1] = 0; // 시작점은 0으로 세팅

  // 3. 모든 노드를 한 번씩 처리
  for (let i = 1; i <= N; i++) {
    // 3-1. 방문 안 한 노드 중 가장 가까운 노드 u 찾기
    let u = -1,
      min = Infinity;
    for (let v = 1; v <= N; v++) {
      if (!visited[v] && dist[v] < min) {
        min = dist[v];
        u = v;
      }
    }
    if (u === -1) break; // 더 이상 갈 수 있는 노드 없음

    // 3-2. u를 방문 처리
    visited[u] = true;

    // 3-3. u의 이웃 노드 거리 갱신
    for (const [nv, w] of g[u]) {
      if (dist[nv] > dist[u] + w) {
        dist[nv] = dist[u] + w;
      }
    }
  }

  // 4. 배달 가능(거리 ≤ K)인 마을 개수 리턴
  return dist.filter((d) => d <= K).length;
}
