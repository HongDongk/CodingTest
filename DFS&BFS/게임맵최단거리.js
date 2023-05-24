// 최단거리 - BFS(큐)

function solution(maps) {
  let answer = 1;
  let queue = [[0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (
          nx >= 0 &&
          nx < maps.length &&
          ny >= 0 &&
          ny < maps[0].length &&
          maps[nx][ny] !== 0
        ) {
          if (nx === maps.length - 1 && ny === maps[0].length - 1) {
            return answer + 1;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}
