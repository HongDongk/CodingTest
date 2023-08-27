// DFS(재귀함수)

function solution(users, emoticons) {
  const salePercent = [10, 20, 30, 40];
  let cases = [];
  let arr = [];
  let result = [0, 0];

  // 이모티콘이 할인될 수 있는 모든 경우의 수 구하기(중복을 포함한순열구하기)
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

  // 하나의 할인 케이스에대한 결과값구하기
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

    // 결과값 result에 집어넣어 비교하여 답 도출
    if (emoticonPlus > result[0]) {
      result[0] = emoticonPlus;
      result[1] = sumPrice;
    } else if (result[0] === emoticonPlus && sumPrice > result[1]) {
      result[1] = sumPrice;
    }
  });

  return result;
}
