function solution(brown, yellow) {
  let a = 0;

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      a = yellow / i;
    }

    if ((i + 2) * (a + 2) === brown + yellow) {
      return [Math.max(i + 2, a + 2), Math.min(i + 2, a + 2)];
    }
  }
}
