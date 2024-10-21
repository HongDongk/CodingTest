// BFS

function solution(begin, target, words) {
  let answer = 0;
  let check = new Array(words.length).fill(false);
  let queue = [begin];

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === target) return answer;
      for (let j = 0; j < words.length; j++) {
        if (!check[j]) {
          let count = 0;
          for (let k = 0; k < x.length; k++) {
            if (x[k] !== words[j][k]) count++;
          }
          if (count === 1) {
            check[j] = true;
            queue.push(words[j]);
          }
        }
      }
    }
    answer++;
  }

  return 0;
}
