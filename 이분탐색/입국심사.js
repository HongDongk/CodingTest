function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => a - b);
  let start = 1;
  let last = times[times.length - 1] * n;

  while (start <= last) {
    let mid = parseInt((start + last) / 2);
    const sum = times.reduce((a, b) => a + parseInt(mid / b), 0);
    if (sum < n) {
      start = mid + 1;
    } else {
      last = mid - 1;
      answer = mid;
    }
  }

  return answer;
}
