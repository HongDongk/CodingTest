function solution(users, emoticons) {
  const salePercent = [10, 20, 30, 40];
  let cases = [];
  let arr = [];
  let result = [0, 0];

  function dfs(depth) {
    if (depth === emoticons.length) {
      cases.push([...arr]);
      return;
    }
    for (let i = 0; i < salePercent.length; i++) {
      arr[depth] = salePercent[i];
      dfs(depth + 1);
    }
  }

  dfs(0);

  cases.map((a) => {
    let emoticonPlus = 0;
    let sumPrice = 0;

    users.map(([buyPercent, buyPlus]) => {
      let price = 0;
      let etPlusFlag = false;

      emoticons.map((b, idx) => {
        if (a[idx] >= buyPercent) {
          price += (b * (100 - a[idx])) / 100;
        }
        if (price >= buyPlus) {
          etPlusFlag = true;
        }
      });
      if (etPlusFlag) emoticonPlus++;
      else sumPrice += price;
    });

    if (emoticonPlus > result[0]) {
      result[0] = emoticonPlus;
      result[1] = sumPrice;
    } else if (result[0] === emoticonPlus && sumPrice > result[1]) {
      result[1] = sumPrice;
    }
  });

  return result;
}
