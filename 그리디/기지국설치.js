function solution(n, stations, w) {
  let answer = 0;
  let current = 1;
  let index = 0;

  while (current <= n) {
    if (index < stations.length && current >= stations[index] - w) {
      current = stations[index] + w + 1;
      index++;
    } else {
      answer++;
      current += 2 * w + 1;
    }
  }

  return answer;
}
