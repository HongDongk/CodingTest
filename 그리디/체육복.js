function solution(n, lost, reserve) {
  let students = new Array(n).fill(1);
  lost.map((a) => (students[a - 1] -= 1));
  reserve.map((a) => (students[a - 1] += 1));

  for (let i = 1; i < n; i++) {
    if (students[i - 1] >= 2 && students[i] == 0) {
      students[i - 1] -= 1;
      students[i] += 1;
    } else if (students[i - 1] == 0 && students[i] >= 2) {
      students[i - 1] += 1;
      students[i] -= 1;
    }
  }

  return students.filter((a) => a >= 1).length;
}
