function solution(weights) {
  let answer = 0;
  const store = {};
  const cal = [1, 3 / 2, 2, 4 / 3];

  weights
    .sort((a, b) => b - a)
    .map((weight) => {
      cal.map((a) => {
        let possible = weight * a;
        if (store[possible]) answer += store[possible];
      });
      if (!store[weight]) store[weight] = 1;
      else store[weight]++;
    });

  return answer;
}
