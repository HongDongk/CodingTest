// map함수와 reduce함수 깊게파악필요

function solution(keymap, targets) {
  const answer = [];
  const minway = {};

  for (let key of keymap) {
    key
      .split("")
      .map(
        (item, index) =>
          (minway[item] = minway[item] < index + 1 ? minway[item] : index + 1)
      );
  }
  for (let target of targets) {
    answer.push(
      target.split("").reduce((acc, cur) => (acc += minway[cur]), 0) || -1
    );
  }

  return answer;
}
