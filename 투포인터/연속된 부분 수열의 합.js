function solution(sequence, k) {
  let answer = [];
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < sequence.length; rt++) {
    sum += sequence[rt];

    while (sum >= k) {
      if (sum === k) {
        answer.push([lt, rt]);
      }
      sum -= sequence[lt];
      lt++;
    }
  }

  return answer.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
