function solution(people, limit) {
  people.sort((a, b) => a - b);
  let lt = 0;
  let rt = people.length - 1;
  let answer = 0;

  while (lt <= rt) {
    if (people[lt] + people[rt] <= limit) {
      lt++;
    }
    rt--;
    answer++;
  }
  return answer;
}
