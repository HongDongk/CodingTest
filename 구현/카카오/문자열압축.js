function solution(s) {
  if (s.length === 1) return 1;
  let answer = [];

  // 절반만 반복가능
  for (let i = 1; i <= s.length / 2; i++) {
    let text = '';
    let cnt = 1; // 반복된 횟수
    let temp = s.slice(0, i); // 반복의 기준이되는 문자열

    for (let j = i; j < s.length; j += i) {
      if (temp === s.slice(j, j + i)) {
        cnt++;
      } else {
        if (cnt === 1) {
          text += temp;
        } else {
          text += cnt + temp;
        }
        cnt = 1;
        temp = s.slice(j, j + i);
      }
    }

    if (cnt === 1) {
      text += temp;
    } else {
      text += cnt + temp;
    }

    answer.push(text);
  }

  return Math.min(...answer.map((a) => a.length));
}
