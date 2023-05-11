// 순열구현하기
// 소수판별하기

function solution(numbers) {
  let result = [];

  function getPermutations(arr, selectnum) {
    let result = [];
    if (selectnum === 1) return arr.map((a) => [a]);

    arr.forEach((a, idx) => {
      let remain = [...arr.slice(0, idx), ...arr.slice(idx + 1)]; // a값 빼고 만들어진배열
      let permutation = getPermutations(remain, selectnum - 1); // rest배열에서 하나작게 뽑기
      const attached = permutation.map((b) => [a, ...b]); // a값과 재귀함수돌린값로 만들어진배열
      result.push(...attached);
    });

    return result;
  }
  function checkPrimeNumber(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  for (let i = 1; i <= numbers.length; i++) {
    result.push(
      ...getPermutations(numbers.split(""), i).map((a) => Number(a.join("")))
    );
  }

  let answer = new Set(result);

  return [...answer].filter((a) => checkPrimeNumber(a)).length;
}
