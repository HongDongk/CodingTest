// 문제를 잘읽자!!

function solution(cacheSize, cities) {
  let answer = 0;
  let stack = [];
  const city = cities.map((a) => a.toLowerCase());

  if (cacheSize === 0) return cities.length * 5;

  for (let i of city) {
    if (!stack.includes(i)) {
      answer += 5;
      stack.push(i);
      if (stack.length > cacheSize) {
        stack.shift();
      }
    } else {
      answer += 1;
      let idx = stack.indexOf(i);
      stack.splice(idx, 1);
      stack.push(i);
    }
  }

  return answer;
}
