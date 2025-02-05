// 2025/02/04 해결!

function solution(routes) {
  let answer = 0;
  let locate = -50000;
  routes = routes.sort((a, b) => a[1] - b[1]);

  for (let route of routes) {
    if (locate < route[0]) {
      locate = route[1];
      answer++;
    }
  }

  return answer;
}
