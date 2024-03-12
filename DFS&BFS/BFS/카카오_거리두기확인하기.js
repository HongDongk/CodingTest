// 약간변형된 BFS방식

function solution(places) {
  let answer = [];

  function check(roomInfo, queue) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
          if (roomInfo[nx][ny] === 'P') return 0; // 거리가 1인 주변에 P가 있으면 0리턴
          if (roomInfo[nx][ny] === 'O') {
            for (let j = 0; j < 4; j++) {
              let aroundNX = nx + dx[j];
              let aroundNY = ny + dy[j];
              if (aroundNX >= 0 && aroundNX < 5 && aroundNY >= 0 && aroundNY < 5) {
                if (aroundNX === x && aroundNY === y) continue; // 본래위치는 제외
                if (roomInfo[aroundNX][aroundNY] === 'P') return 0; // 거리가 2인 주변에 P가 있으면 0리턴
              }
            }
          }
        }
      }
    }
    return 1;
  }

  for (let place of places) {
    let queue = [];
    place = place.map((a) => a.split(''));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') {
          queue.push([i, j]);
        }
      }
    }
    answer.push(check(place, queue));
  }

  return answer;
}
