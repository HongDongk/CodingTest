// 객체의 키값들불러오기 - Object.keys('객체');
// 객체의 value값들불러오기 - Object.values('객체');

function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";

  for (let i = 0; i < choices.length; i++) {
    let [left, right] = survey[i].split("");

    let score = Math.abs(choices[i] - 4);

    if (choices[i] <= 3) {
      types[left] += score;
    } else if (choices[i] > 3) {
      types[right] += score;
    }
  }

  const keys = Object.keys(types);
  for (let i = 0; i < keys.length; i += 2) {
    if (types[keys[i]] >= types[keys[i + 1]]) {
      answer += keys[i];
    } else {
      answer += keys[i + 1];
    }
  }

  return answer;
}
