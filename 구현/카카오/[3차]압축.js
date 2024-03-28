function solution(msg) {
  let dic = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let temp = '';
  let answer = [];

  for (let word of msg) {
    temp += word;
    if (!dic.includes(temp)) {
      answer.push(dic.indexOf(temp.slice(0, -1)) + 1);
      dic.push(temp);
      temp = word;
    }
  }

  if (temp.length > 0) answer.push(dic.indexOf(temp) + 1);

  return answer;
}
