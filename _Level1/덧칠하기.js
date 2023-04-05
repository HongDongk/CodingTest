function solution(n, m, section) {
  let answer = 1;
  let check = section[0] + m - 1;

  for (let i of section) {
    if (i <= check) continue;
    else {
      check = i + m - 1;
      answer++;
    }
  }

  return answer;
}
