// 트리순회

function solution(n, wires) {
  let links = {};
  let answer = 100;

  wires.map((a) => {
    if (!links[a[0]]) links[a[0]] = [];
    if (!links[a[1]]) links[a[1]] = [];
    links[a[0]].push(a[1]);
    links[a[1]].push(a[0]);
  });

  function searchtree(x, y) {
    let count = 0;
    let visited = [];
    let array = [x];
    visited[x] = true;

    while (array.length > 0) {
      const next = array.pop();
      links[next].map((a) => {
        if (a !== y && !visited[a]) {
          visited[a] = true;
          array.push(a);
        }
      });
      count++;
    }
    return count;
  }

  wires.map((a) => {
    const count = Math.abs(searchtree(a[0], a[1]) - searchtree(a[1], a[0]));
    answer = answer > count ? count : answer;
  });

  return answer;
}
