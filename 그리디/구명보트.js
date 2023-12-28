// 쉬운문제

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    let heavy = people.pop();
    if (heavy + people[0] <= limit) people.shift();
    answer++;
  }

  return answer;
}
