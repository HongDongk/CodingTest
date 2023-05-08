// 시간초과 => 객체로해결!

function solution(players, callings) {
  let info = {};

  players.map((a, idx) => (info[a] = idx));

  for (let i of callings) {
    let num = info[i];
    let before = players[info[i] - 1];
    info[i]--;
    info[before]++;
    players[num - 1] = i;
    players[num] = before;
  }

  return players;
}
