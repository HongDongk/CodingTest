// 풀었음!!!!!!!!!!!!!!!!!!!!!!!!
// 다른 사람풀이 분석필요

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let answer = 9999999999999;
  let use = new Array(words.length).fill(false);

  function DFS(L, word) {
    if (L > words.length) return;
    if (word === target) {
      console.log("성공");
      answer = Math.min(answer, L);
    } else {
      for (let w of words) {
        if (use[words.indexOf(w)]) continue;
        let count = 0;
        for (let i = 0; i < w.length; i++) {
          if (w[i] !== word[i]) count++;
        }
        if (count === 1) {
          use[words.indexOf(w)] = true;
          DFS(L + 1, w);
          use[words.indexOf(w)] = false;
        }
      }
    }
  }

  DFS(0, begin);

  return answer;
}
