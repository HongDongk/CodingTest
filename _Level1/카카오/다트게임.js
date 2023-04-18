// 문제읽고 구현하는 능력

function solution(dartResult) {
  let score = 0;
  let cnt = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = dartResult[i - 1] === "1" ? 10 : parseInt(dartResult[i]);
    } else if (dartResult[i] === "S") {
      cnt.push(score);
    } else if (dartResult[i] === "D") {
      cnt.push(Math.pow(score, 2));
    } else if (dartResult[i] === "T") {
      cnt.push(Math.pow(score, 3));
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 2] *= 2;
      cnt[cnt.length - 1] *= 2;
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] *= -1;
    }
  }

  const answer = cnt.reduce((a, b) => a + b, 0);

  return answer;
}
