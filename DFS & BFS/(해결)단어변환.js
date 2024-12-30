// BFS

function solution(begin, target, words) {
  let answer = 0;
  let check = new Array(words.length).fill(false);
  let queue = [begin];

  function checking(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count++;
      }
    }
    if (count === 1) return true;
    else return false;
  }

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let now = queue.shift();
      if (now === target) return answer;
      for (let j = 0; j < words.length; j++) {
        if (checking(words[j], now) && !check[j]) {
          check[j] = true;
          queue.push(words[j]);
        }
      }
    }
    answer++;
  }

  return 0;
}
