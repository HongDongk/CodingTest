function solution(maps) {
  maps = maps.map((a) => a.split(''));
  let answer = [];
  let sum = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    maps[x][y] = 'X';
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length && maps[nx][ny] !== 'X') {
        sum += Number(maps[nx][ny]);
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== 'X') {
        sum += Number(maps[i][j]);
        DFS(i, j);
        answer.push(sum);
        sum = 0;
      }
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
