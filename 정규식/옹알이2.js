function solution(babbling) {
  let answer = 0;

  for (let word of babbling) {
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue; // 괄호안에 문자가 단어에서 연속되는 확인
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      // 괄호안에 들어있는 단어로만 구성되있는지 체크
      answer++;
    }
  }

  return answer;
}
