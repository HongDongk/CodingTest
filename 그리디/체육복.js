function solution(n, lost, reserve) {
  let arr = new Array(n).fill(1);

  lost.map((a) => arr[a - 1]--);
  reserve.map((a) => arr[a - 1]++);

  // 여기부분 조심
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= 2 && arr[i] === 0) {
      arr[i - 1]--;
      arr[i]++;
    } else if (arr[i - 1] === 0 && arr[i] >= 2) {
      arr[i]--;
      arr[i - 1]++;
    }
  }

  return arr.filter((a) => a >= 1).length;
}
