function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  let answer = 0;
  let start = 1;
  let last = distance;

  rocks.push(distance);

  while (start <= last) {
    let mid = parseInt((start + last) / 2);
    let prevRock = 0; // 이전 돌 위치
    let remove = 0; // 제거되는 돌 갯수

    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prevRock < mid) {
        remove++;
      } else {
        prevRock = rocks[i];
      }
    }

    if (remove > n) {
      last = mid - 1;
    } else {
      start = mid + 1;
      answer = Math.max(answer, mid);
    }
  }

  return answer;
}
