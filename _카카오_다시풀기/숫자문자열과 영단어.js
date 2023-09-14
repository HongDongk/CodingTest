// 정규식 풀이
function solution(s) {
  return parseInt(
    s
      .replace(/zero/g, 0)
      .replace(/one/g, 1)
      .replace(/two/g, 2)
      .replace(/three/g, 3)
      .replace(/four/g, 4)
      .replace(/five/g, 5)
      .replace(/six/g, 6)
      .replace(/seven/g, 7)
      .replace(/eight/g, 8)
      .replace(/nine/g, 9)
  );
}

// 정규식사용하지 않은 풀이

function solution(s) {
  var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var wordArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < 9; i++) {
    if (s.includes(wordArr[i])) {
      s = s.replaceAll(wordArr[i], numArr[i]);
    }
  }

  return Number(s);
}
