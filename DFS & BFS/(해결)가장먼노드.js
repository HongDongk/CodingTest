function solution(n, edge) {
  let result = new Array(n + 1).fill(Infinity);
  let info = new Array(n + 1).fill(0).map((a) => []);

  for (let i of edge) {
    info[i[0]].push(i[1]);
    info[i[1]].push(i[0]);
  }

  let queue = [1];
  result[0] = 0;
  result[1] = 0;
  let count = 1;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      for (let j of info[current]) {
        if (result[j] > count) {
          result[j] = count;
          queue.push(j);
        }
      }
    }
    count++;
  }

  let maxx = Math.max(...result);
  return result.filter((a) => a === maxx).length;
}
