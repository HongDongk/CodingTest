function solution(arr, m) {
  let answer = [];
  let check = new Array(arr.length).fill(false);
  let temp = new Array(m).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
    }
  }

  DFS(L);
  return answer;
}
