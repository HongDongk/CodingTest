function solution(money) {
  let dp1 = new Array(money.length).fill(0);
  let dp2 = new Array(money.length).fill(0);

  dp1[0] = money[0];
  dp1[1] = money[0];
  for (let i = 2; i < money.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
  }

  dp2[1] = money[1];
  for (let i = 2; i < money.length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  return Math.max(dp1[money.length - 2], dp2[money.length - 1]);
}
