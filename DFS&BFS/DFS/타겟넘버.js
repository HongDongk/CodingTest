function solution(numbers, target) {
  let answer = 0;
  let visited = new Array(numbers.length).fill(false);

  function DFS(count, summ) {
    if (count === numbers.length) {
      if (summ === target) answer++;
      else return;
    } else {
      DFS(count + 1, summ + numbers[count]);
      DFS(count + 1, summ - numbers[count]);
    }
  }

  DFS(0, 0);

  return answer;
}
