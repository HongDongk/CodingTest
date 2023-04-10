function solution(babbling) {
  let answer = 0;

  for (let word of babbling) {
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue; // 연속된 두발음이 있는지 체크하는 정규식
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }

  return answer;
}
