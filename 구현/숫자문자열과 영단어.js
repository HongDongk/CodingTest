// 정규식 풀이
function solution(s) {
  return Number(
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
  let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let wordArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (let i = 0; i < 9; i++) {
    if (s.includes(wordArr[i])) {
      s = s.replaceAll(wordArr[i], numArr[i]);
    }
  }

  return Number(s);
}

// 신박한 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
