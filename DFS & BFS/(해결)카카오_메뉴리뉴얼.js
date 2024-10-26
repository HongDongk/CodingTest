function solution(orders, course) {
  let answer = [];
  orders = orders.map((a) => a.split(''));

  function combi(array, n) {
    let temp = new Array(n).fill(0);
    let answer = [];

    function DFS(L, m) {
      if (L === n) {
        answer.push(temp.slice().sort().join(''));
      } else {
        for (let i = m; i < array.length; i++) {
          temp[L] = array[i];
          DFS(L + 1, i + 1);
        }
      }
    }

    DFS(0, 0);

    return answer;
  }

  for (let i of course) {
    let temp = {};
    for (let order of orders) {
      combi(order, i).map((a) => {
        if (!temp[a]) temp[a] = 1;
        else temp[a] += 1;
      });
    }
    let maxx = Math.max(...Object.values(temp));
    if (maxx < 2) continue;
    for (const [key, value] of Object.entries(temp)) {
      if (value >= maxx) answer.push(key);
    }
  }

  return answer.sort();
}
