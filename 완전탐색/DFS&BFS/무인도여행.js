// DFS(재귀함수)

function solution(maps) {
  let answer = [];
  maps = maps.map((n) => n.split(""));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y, num) {
    let sum = Number(num);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length) {
        if (maps[nx][ny] !== "X") {
          const next = maps[nx][ny];
          maps[nx][ny] = "X";
          sum += dfs(nx, ny, next);
        }
      }
    }

    return sum;
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== "X") {
        const start = maps[i][j];
        maps[i][j] = "X";
        answer.push(dfs(i, j, start));
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
