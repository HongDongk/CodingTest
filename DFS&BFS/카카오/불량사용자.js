// DFS(재귀함수)

function solution(user_id, banned_id) {
  let temp = new Array(user_id.length).fill(0);
  let set = new Set();

  function checking(userid, banid) {
    if (userid.length !== banid.length) return false;
    for (let i = 0; i < userid.length; i++) {
      if (userid[i] !== banid[i] && banid[i] !== "*") return false;
    }
    return true;
  }

  function dfs(idx, cnt, possible) {
    if (cnt === banned_id.length) {
      let arr = possible.split(" ");
      arr.sort();
      set.add(arr.join(""));
    }

    if (idx >= banned_id.length) return;

    for (let i = idx; i < banned_id.length; i++) {
      for (let j = 0; j < user_id.length; j++) {
        if (temp[j] === 1) continue;
        if (!checking(user_id[j], banned_id[i])) continue;
        temp[j] = 1;
        dfs(i + 1, cnt + 1, possible + " " + user_id[j]);
        temp[j] = 0;
      }
    }
  }

  dfs(0, 0, "");

  return set.size;
}
