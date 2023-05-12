// 문제를 잘읽자!!

function solution(cacheSize, cities) {
  cities = cities.map((a) => a.toLowerCase());
  let totaltime = 0;
  let cash = [];

  if (cacheSize === 0) return cities.length * 5;

  for (let i of cities) {
    if (!cash.includes(i)) {
      cash.push(i);
      totaltime += 5;
      if (cash.length > cacheSize) {
        cash.shift();
      }
    } else {
      totaltime += 1;
      cash.splice(cash.indexOf(i), 1);
      cash.push(i);
    }
  }

  return totaltime;
}
