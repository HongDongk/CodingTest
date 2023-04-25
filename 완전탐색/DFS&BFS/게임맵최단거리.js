// 최단거리 - BFS(큐)

function solution(maps) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1) {
      return cur[2];
    }

    for (let i = 0; i < 4; i++) {
      const nx = cur[0] + dx[i];
      const ny = cur[1] + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < maps.length &&
        ny < maps[0].length &&
        maps[nx][ny] === 1
      ) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, cur[2] + 1]);
      }
    }
  }

  return -1;
}
