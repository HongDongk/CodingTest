function solution(stones, k) {
  let start = 1;
  let end = stones.reduce((a, b) => a + b, 0);
  let answer = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
      if (count >= k) break;
      if (stones[i] - mid <= 0) {
        count++;
      } else {
        count = 0;
      }
    }

    if (count >= k) {
      end = mid - 1;
    } else {
      start = mid + 1;
      answer = Math.max(answer, start);
    }
  }
  return answer;
}
