function solution(user_id, banned_id) {
  let answer = [];
  let check = new Array(user_id.length).fill(false);
  let temp = [];

  function analyze(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i] && a[i] !== '*') return false;
    }
    return true;
  }

  function DFS(L, temp) {
    if (L === banned_id.length) {
      answer.push(temp.slice());
      temp = [];
    } else {
      for (let i = 0; i < user_id.length; i++) {
        if (!check[i] && analyze(banned_id[L], user_id[i])) {
          check[i] = true;
          temp.push(user_id[i]);
          DFS(L + 1, temp);
          temp.pop(user_id[i]);
          check[i] = false;
        }
      }
    }
  }

  DFS(0, temp);

  answer = answer.map((a) => a.sort().join(''));

  const result = new Set(answer);

  return result.size;
}
