// 문자열 구현

function solution(msg) {
  let words = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let temp = "";
  let answer = [];

  for (let i of msg) {
    temp += i;
    if (!words.includes(temp)) {
      answer.push(words.indexOf(temp.slice(0, -1)) + 1);
      words.push(temp);
      temp = i;
    }
  }

  if (temp.length>0) answer.push(words.indexOf(temp) + 1);

  return answer;
}
