// 객체의 [키,value] 불러오기 - Object.entries('객체');

function solution(players, callings) {
  let answer = {};
  for (let i = 0; i < players.length; i++) {
    answer[players[i]] = i;
  }

  for (let i of callings) {
    let num = answer[i];
    let before = players[num - 1];
    answer[before]++;
    answer[i]--;
    players[num - 1] = i;
    players[num] = before;
  }

  return Object.entries(answer)
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0]);
}
