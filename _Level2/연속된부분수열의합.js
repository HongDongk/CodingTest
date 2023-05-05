function solution(sequence, k) {
  let answer = [];
  let start = 0;
  let sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    if (sum > k) {
      while (sum > k) {
        sum -= sequence[start++];
      }
    }
    if (sum === k) {
      answer.push([start, i]);
    }
  }

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
