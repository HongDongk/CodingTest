// 시간 오래걸림 + 문제 이해하는데 오래걸림

function solution(users, emoticons) {
  let answer = [0, 0];
  let discount = [10, 20, 30, 40];
  let temp = new Array(emoticons.length).fill(false);
  let permutation = [];

  // 할인율에 대한 중복 순열구하기
  function DFS(L) {
    if (L === emoticons.length) {
      permutation.push(temp.slice());
    } else {
      for (let i = 0; i < 4; i++) {
        temp[L] = discount[i];
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  for (let arr of permutation) {
    let emprice = 0;
    let emplus = 0;
    for (let user of users) {
      let temp = 0;
      let temp2 = 0;
      let [minper, maxprice] = user;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= minper) {
          temp += ((100 - arr[i]) / 100) * emoticons[i];
        }
      }

      if (temp >= maxprice) {
        temp2 = 1;
        temp = 0;
      }

      emprice += temp;
      emplus += temp2;
    }
    if (answer[0] < emplus) {
      answer = [emplus, emprice];
    } else if (answer[0] === emplus) {
      if (answer[1] < emprice) {
        answer = [emplus, emprice];
      }
    }
  }

  return answer;
}
