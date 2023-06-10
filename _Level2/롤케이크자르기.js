// for문 안에서 계속 Set(객체)을 생성한다면, 시간초과난다!
// 객체를 이용해 해결

function solution(topping) {
  let a = new Set();
  let b = {};

  let answer = 0;
  let check = 0;

  for (let i = 0; i < topping.length; i++) {
    if (b[topping[i]]) {
      b[topping[i]]++;
    } else {
      b[topping[i]] = 1;
      check++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    a.add(topping[i]);
    b[topping[i]]--;

    if (!b[topping[i]]) check--;
    if (a.size === check) answer++;
  }

  return answer;
}
