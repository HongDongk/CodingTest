function solution(stones, k) {
  let start = 1;
  let last = 200000000;
  let answer = 0;

  while (start <= last) {
    let mid = parseInt((start + last) / 2);
    let copy = stones.slice();
    let count = 0;
    for (let i = 0; i < copy.length; i++) {
      if (count >= k) break;
      if (copy[i] - mid <= 0) count++;
      else count = 0;
    }
    if (count >= k) {
      last = mid - 1;
    } else {
      start = mid + 1;
      answer = start;
    }
  }

  return start;
}
