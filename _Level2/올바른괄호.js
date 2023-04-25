function solution(s) {
  let count = 0;

  for (let i of s) {
    count += i === "(" ? 1 : -1;
    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}
