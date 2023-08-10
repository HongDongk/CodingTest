function solution(n, lost, reserve) {
  let students = {};

  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  lost.map((a) => students[a]--);
  reserve.map((a) => students[a]++);

  for (let i = 2; i <= n; i++) {
    if (students[i - 1] > 1 && students[i] === 0) {
      students[i - 1]--;
      students[i]++;
    } else if (students[i - 1] === 0 && students[i] > 1) {
      students[i]--;
      students[i - 1]++;
    }
  }

  return Object.values(students).filter((a) => a > 0).length;
}
