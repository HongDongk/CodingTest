function solution(N, number) {
  let use = new Array(8).fill().map((a) => new Set());

  for (let i = 0; i < 8; i++) {
    use[i].add(Number(N.toString().repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (let arg1 of use[j]) {
        for (let arg2 of use[i - j - 1]) {
          use[i].add(arg1 + arg2);
          use[i].add(arg1 - arg2);
          use[i].add(arg1 * arg2);
          use[i].add(arg1 / arg2);
        }
      }
    }
    if (use[i].has(number)) return i + 1;
  }

  return -1;
}
