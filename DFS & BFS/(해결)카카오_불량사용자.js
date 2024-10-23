// DFS

function solution(user_id, banned_id) {
  let answer = [];
  let check = new Array(user_id.length).fill(false);
  let temp = new Array(banned_id.length).fill(0);

  function checking(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === '*') continue;
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  function DFS(L) {
    if (L >= banned_id.length) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < user_id.length; i++) {
        if (!check[i]) {
          if (checking(banned_id[L], user_id[i])) {
            check[i] = true;
            temp[L] = user_id[i];
            DFS(L + 1);
            check[i] = false;
          }
        }
      }
    }
  }

  DFS(0);

  let result = new Set();
  answer.map((a) => result.add(a.sort().join('')));

  // console.log([...result]);
  return result.size;
}
