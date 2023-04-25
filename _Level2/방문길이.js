function solution(dirs) {
  let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let way = new Set();

  for (let i of dirs) {
    let nextX = now[0] + move[i][0];
    let nextY = now[1] + move[i][1];

    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

    way.add(String(now[0]) + String(now[1]) + String(nextX) + String(nextY));
    way.add(String(nextX) + String(nextY) + String(now[0]) + String(now[1]));

    now = [nextX, nextY];
  }

  return way.size / 2;
}
