function solution(places) {
  let answer = [];

  function find(place) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    let queue = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') {
          queue.push([i, j]);
        }
      }
    }

    while (queue.length) {
      let [cx, cy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = cx + dx[i];
        let ny = cy + dy[i];

        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
          if (place[nx][ny] === 'P') return 0; // 거리가 1인 주변에 P가 있을 때
          if (place[nx][ny] === 'O') {
            for (let j = 0; j < 4; j++) {
              let nnx = nx + dx[j];
              let nny = ny + dy[j];

              if (nnx >= 0 && nnx < 5 && nny >= 0 && nny < 5) {
                if (nnx === cx && nny === cy) continue; // 본래위치는 제외
                if (place[nnx][nny] === 'P') return 0; // 거리가 2인 주변에 P가 있을 때
              }
            }
          }
        }
      }
    }

    return 1;
  }

  for (let place of places) {
    place = place.map((a) => a.split(''));
    answer.push(find(place));
  }

  return answer;
}
