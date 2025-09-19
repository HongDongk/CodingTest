function solution(stones, k) {
  let answer;
  let start = 1;
  let end = stones.reduce((a, b) => a + b, 0);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    for (let stone of stones) {
      if (count >= k) break;
      if (stone - mid < 0) {
        count++;
      } else {
        count = 0;
      }
    }

    if (count >= k) {
      end = mid - 1;
    } else {
      start = mid + 1;
      answer = mid;
    }
  }

  return answer;
}
