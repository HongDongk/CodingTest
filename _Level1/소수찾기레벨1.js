// 효율성
// 에라토스테네스의 체 - n까지의 소수의 갯수는 2부터 n까지의 숫자들중에서 2부터 n의 제곱근까지의 배수를 모두 삭제해주면된다.
// n까지의 소수갯수 - 2부터 n의 제곱근이하 돌면서 나머지 0인게 있는지 확인하면됌

function solution(n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (arr[i] === false) {
      continue;
    }
    for (let k = i * i; k <= n; k += i) {
      arr[k] = false;
    }
  }

  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }

  return answer;
}
