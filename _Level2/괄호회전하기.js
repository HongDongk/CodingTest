// 스택활용

function solution(s) {
  if (s.length % 2 === 1) return 0;

  let answer = 0;

  function check(words) {
    let stack = [];
    for (let word of words.split("")) {
      if (word === "(" || word === "{" || word === "[") stack.push(word);
      else {
        let leftword = stack.pop();
        if (word === ")" && leftword === "(") continue;
        if (word === "}" && leftword === "{") continue;
        if (word === "]" && leftword === "[") continue;
        else {
          return false;
        }
      }
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    let word = s.slice(i) + s.slice(0, i);

    if (check(word)) {
      answer++;
    }
  }

  return answer;
}
