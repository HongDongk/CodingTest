function solution(n, lost, reserve) {
  let arr = new Array(n).fill(1);

  for (let i of lost) {
    arr[i - 1]--;
  }
  for (let i of reserve) {
    arr[i - 1]++;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= 2 && arr[i] === 0) {
      arr[i - 1] -= 1;
      arr[i] += 1;
    } else if (arr[i - 1] === 0 && arr[i] >= 2) {
      arr[i] -= 1;
      arr[i - 1] += 1;
    }
  }

  return arr.filter((a) => a >= 1).length;
}
