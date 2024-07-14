// 정규식 사용
function solution(babbling) {
  let answer = 0;

  for (let word of babbling) {
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      let flg = true;
      for (let i of can) {
        if (word.includes(i.repeat(2))) {
          flg = false;
          break;
        }
      }
      if (flg) answer++;
    }
  }
  return answer;
}

// 일반풀이
function solution(babbling) {
  const can = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      babble = babble.split(can[j]).join(' ');
    }

    if (babble.split(' ').join('').length === 0) {
      count += 1;
    }
  }

  return count;
}
