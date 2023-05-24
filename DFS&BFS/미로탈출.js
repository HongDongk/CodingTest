// BFS(큐)
// 두번 사용하면 됌

function bfs(start, arr, target) {
  let answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [start];

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (
          nx >= 0 &&
          nx < arr.length &&
          ny >= 0 &&
          ny < arr[0].length &&
          arr[nx][ny] !== "X"
        ) {
          if (arr[nx][ny] === target) {
            return answer + 1;
          }
          queue.push([nx, ny]);
          arr[nx][ny] = "X";
        }
      }
    }
    answer++;
  }

  return -1;
}

function solution(maps) {
  let start = [];
  let lever = [];

  const maps1 = maps.map((a) => a.split(""));
  const maps2 = maps.map((a) => a.split(""));

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") start = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
    }
  }

  const a = bfs(start, maps1, "L"); // 시작점에서 끝점
  const b = bfs(lever, maps2, "E"); // 레버에서 끝점

  if (a === -1 || b === -1) return -1; // 둘중에 하나라도 못가면 -1

  return a + b;
}
