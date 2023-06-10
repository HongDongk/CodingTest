// 시간초과 => 스택으로 해결!

function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let idxs = [];

  for (let i = 0; i < numbers.length; i++) {
    while (idxs && numbers[idxs[idxs.length - 1]] < numbers[i]) {
      answer[idxs.pop()] = numbers[i];
    }
    idxs.push(i);
  }

  return answer;
}
