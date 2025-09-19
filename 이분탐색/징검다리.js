function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  rocks.push(distance);

  let start = 0;
  let end = distance;
  let answer = 0;

  function canmake(goal) {
    let prev = 0;
    let count = 0;

    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prev < goal) {
        count++;
      } else {
        prev = rocks[i];
      }
      if (count > n) return false;
    }

    return true;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (canmake(mid)) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}
