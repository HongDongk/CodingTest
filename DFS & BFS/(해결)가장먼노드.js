// BFS

function solution(n, edge) {
  let answer = 0;
  let check = new Array(n).fill(false);
  check[0] = true;
  let queue = [1];

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let now = queue.shift();
      for (let j = 0; j < edge.length; j++) {
        if (edge[j].includes(now) && !check[edge[j][1 - edge[j].indexOf(now)] - 1]) {
          check[edge[j][1 - edge[j].indexOf(now)] - 1] = true;
          queue.push(edge[j][1 - edge[j].indexOf(now)]);
        }
      }
    }
    if (queue.length === 0) {
      answer = len;
    }
  }

  return answer;
}
