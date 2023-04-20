// array.some((a) => a>5) - 모든 array의 원소중 5보다 큰게 있으면 true 반환, 없으면 false 반환

function solution(priorities, location) {
  let x = [];
  let count = 0;

  for (let i = 0; i < priorities.length; i++) {
    x.push({ locate: i === location, rank: priorities[i] });
  }

  while (true) {
    let cur = x.shift();
    if (x.some((a) => a.rank > cur.rank)) {
      x.push(cur);
    } else {
      count++;
      if (cur.locate) return count;
    }
  }
}
