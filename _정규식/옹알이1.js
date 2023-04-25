// 정규식 특정단어로만이루어진 단어: /^(dongkeun|hong)+$/; - dongkeun, hong으로만 이루어짐
// 정규식과 맞는지 안맞는지 확인 : regx.test(word)

function solution(babbling) {
  var answer = 0;

  babbling.forEach((word) => {
    if (/^(aya|ye|woo|ma)+$/g.test(word)) answer++;
  });

  return answer;
}
