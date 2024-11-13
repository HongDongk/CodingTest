// 두 명만 탈 수 잇으므로 그리디를 사용한다!

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    let heavy = people.pop();
    if (people.length > 0 && heavy + people[0] <= limit) people.shift();
    answer++;
  }

  return answer;
}
