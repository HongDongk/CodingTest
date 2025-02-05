// 매순간, 최적의 선택을 하는 것이 반복되면 그리디이다!
// 2025/02/04
// 여벌을 가진 학생을 정렬 후, 앞뒤를 확인하며 빌려주는 방식

function solution(n, lost, reserve) {
  let students = new Array(n).fill(1);
  for (let i = 0; i < lost.length; i++) {
    students[lost[i] - 1] -= 1;
  }

  for (let i = 0; i < reserve.length; i++) {
    students[reserve[i] - 1] += 1;
  }

  for (let i = 0; i < students.length; i++) {
    if (students[i] === 0) {
      if (students[i - 1] >= 2 && i > 0) {
        students[i - 1] -= 1;
        students[i] = 1;
      } else if (students[i + 1] >= 2 && i < students.length) {
        students[i + 1] -= 1;
        students[i] = 1;
      }
    }
  }

  return students.filter((a) => a >= 1).length;
}
