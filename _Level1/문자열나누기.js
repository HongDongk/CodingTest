function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    const same = stack.filter((a) => a === stack[0]);
    const diffrent = stack.filter((a) => a !== stack[0]);

    if (same.length === diffrent.length) {
      answer += 1;
      stack = [];
    }
  }

  if (stack.length > 0) {
    answer += 1;
  }

  return answer;
}
