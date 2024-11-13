function solution(routes) {
  let answer = 1;
  routes = routes.sort((a, b) => a[1] - b[1]);
  let temp = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    if (temp < routes[i][0]) {
      answer++;
      temp = routes[i][1];
    }
  }
  return answer;
}
