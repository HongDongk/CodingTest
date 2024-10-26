// DFS
// 3중 for문을 사용해도 풀림!

function solution(users, emoticons) {
  let discount = [10, 20, 30, 40];
  let temp = [];
  let result = [];
  let answer = [0, 0];

  function DFS(L) {
    if (L === emoticons.length) result.push(temp.slice());
    else {
      for (let i of discount) {
        temp.push(i);
        DFS(L + 1);
        temp.pop();
      }
    }
  }

  DFS(0);

  for (let arr of result) {
    let emprice = 0;
    let emplus = 0;
    for (let user of users) {
      let temp = 0;
      let [minper, maxprice] = user;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= minper) temp += ((100 - arr[i]) / 100) * emoticons[i];
      }

      if (temp >= maxprice) {
        emplus += 1;
      } else {
        emprice += temp;
      }
    }

    if (answer[0] < emplus) {
      answer = [emplus, emprice];
    }
    if (answer[0] === emplus) {
      answer = [emplus, Math.max(answer[1], emprice)];
    }
  }

  return answer;
}
