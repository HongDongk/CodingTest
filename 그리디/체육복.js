function solution(n, lost, reserve) {
  let info = {};
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    info[i] = 1;
  }

  lost.map((a) => (info[a] -= 1));
  reserve.map((a) => (info[a] += 1));

  for (let i = 1; i <= n; i++) {
    if (info[i] === 0) {
      if (info[i - 1] === 2) {
        info[i - 1] -= 1;
        info[i] += 1;
      } else if (info[i + 1] === 2) {
        info[i + 1] -= 1;
        info[i] += 1;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (info[i] >= 1) {
      answer++;
    }
  }

  return answer;
}
