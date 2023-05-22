function solution(cards) {
  let visited = new Array(cards.length).fill(0);
  let group = [];
  let result = [];
  let idx = cards[0];

  while (true) {
    if (visited.indexOf(0) === -1) {
      result.push(group);
      break;
    }
    if (!visited[idx - 1]) {
      visited[idx - 1] = 1;
      group.push(idx);
      idx = cards[idx - 1];
    } else {
      idx = visited.indexOf(0) + 1;
      result.push(group);
      group = [];
    }
  }

  result.sort((a, b) => b.length - a.length);

  return result.length === 1 ? 0 : result[0].length * result[1].length;
}
