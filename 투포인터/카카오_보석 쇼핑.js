function solution(gems) {
  let all = [...new Set(gems)];
  let totalcount = 0;
  let gemcount = {};
  for (let i = 0; i < all.length; i++) {
    gemcount[all[i]] = 0;
  }
  let lt = 0;
  let answer = [1, gems.length];

  for (let rt = 0; rt < gems.length; rt++) {
    if (gemcount[gems[rt]] === 0) totalcount++;
    gemcount[gems[rt]]++;

    while (totalcount === all.length) {
      if (rt - lt < answer[1] - answer[0]) {
        answer = [lt + 1, rt + 1];
      }
      gemcount[gems[lt]]--;
      if (gemcount[gems[lt]] === 0) totalcount--;
      lt++;
    }
  }

  return answer;
}
