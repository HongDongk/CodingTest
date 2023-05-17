function solution(s) {
  const len = s.length;
  let answer = [s];

  for (let i = 1; i <= s.length / 2; i++) {
    let text = "";
    let cnt = 1;
    let temp = s.slice(0, i);

    for (let j = i; j < len; j += i) {
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
