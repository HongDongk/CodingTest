// 합쳐서 조건보다 작은 값을 찾을 때는 배열의 인덱스를 활용해본다!
// 조건 잘처리하기

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let a = 0;
  let b = people.length - 1;

  while (a < b) {
    if (people[a] + people[b] > limit) {
      a++;
    } else {
      a++;
      b--;
    }
    answer++;
  }

  if (a === b) answer++; // 한명 남았을 때 1 추가

  return answer;
}
