// BFS

function solution(begin, target, words) {
  let answer = 0;
  let queue = [begin];
  let ch = new Array(words.length).fill(false);

  if (!words.includes(target)) return 0;

  function checkword(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++;
    }
    if (count === 1) return true;
    return false;
  }

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let now = queue.shift();
      if (now === target) return answer;
      for (let j = 0; j < words.length; j++) {
        if (!ch[j] && checkword(now, words[j])) {
          ch[j] = true;
          queue.push(words[j]);
        }
      }
    }
    answer++;
  }
}
