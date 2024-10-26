// BFS
// dx는 y좌표, dy는 x좌표의 이동

function solution(maps) {
  let answer = 1;
  let queue = [[0, 0]];
  maps[0][0] = 0;

  let dx = [-1, 0, 1, 0]; // 위, 오른쪽, 아래, 왼쪽
  let dy = [0, 1, 0, -1];

  while (queue.length) {
    let len = queue.length;
    for (let w = 0; w < len; w++) {
      let [cx, cy] = queue.shift();
      if (cx === maps.length - 1 && cy === maps[0].length - 1) return answer;
      for (let i = 0; i < 4; i++) {
        let nx = cx + dx[i];
        let ny = cy + dy[i];
        if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length && maps[nx][ny] === 1) {
          maps[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}
