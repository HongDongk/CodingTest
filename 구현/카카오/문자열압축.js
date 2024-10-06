function solution(s) {
  if (s.length === 1) return 1;
  let answer = [];

  for (let i = 1; i < s.length; i++) {
    let temp = [];
    for (let j = 0; j < s.length; j += i) {
      temp.push(s.slice(j, j + i)); // 갯수별로 문자열 자르기
    }
    let result = '';
    let temp2 = '';
    let count = 1;
    for (let z = 0; z < temp.length; z++) {
      temp2 = temp[z];
      if (temp2 === temp[z + 1]) {
        count += 1;
      } else {
        if (count === 1) {
          result += temp2;
        } else {
          result += count + temp2;
        }
        count = 1;
      }
    }
    answer.push(result.length);
  }
  return Math.min(...answer);
}
