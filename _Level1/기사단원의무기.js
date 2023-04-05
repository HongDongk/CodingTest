// 시간초과로 통과못함
// 약수갯수는 절반만큼순회한뒤 1더해주면됌

function solution(number, limit, power) {
  let answer = 0;
  let counter = 0;

  for (let i = 1; i <= number; i++) {
    counter = 1;

    for (let k = 1; k <= i / 2; k++) {
      if (i % k === 0) {
        counter += 1;
      }
    }

    if (counter > limit) {
      answer += power;
    } else {
      answer += counter;
    }
  }

  return answer;
}
