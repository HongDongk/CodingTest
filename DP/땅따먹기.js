function solution(land) {
  let dp = land[0].slice();

  for (let i = 1; i < land.length; i++) {
    let current = new Array(4).fill(0);
    for (let j = 0; j < 4; j++) {
      let best = 0;
      for (let z = 0; z < 4; z++) {
        if (j === z) continue;
        if (best < dp[z]) best = dp[z];
      }
      current[j] = land[i][j] + best;
    }

    dp = current;
  }

  return Math.max(...dp);
}

// filter 사용하기(추천)
function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((a, index) => index !== j));
    }
  }

  return Math.max(...land[land.length - 1]);
}
