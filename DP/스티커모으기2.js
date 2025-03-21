function solution(sticker) {
  let dp1 = new Array(sticker.length).fill(0); // 첫번째 스티커 땐경우
  let dp2 = new Array(sticker.length).fill(0); // 첫번째 스티커 안땐경우

  dp1[0] = sticker[0];
  dp1[1] = sticker[0];
  dp2[1] = sticker[1];

  for (let i = 2; i < sticker.length; i++) {
    if (i === sticker.length - 1) {
      dp1[i] = dp1[i - 1];
    } else {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }

    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[sticker.length - 1], dp2[sticker.length - 1]);
}
