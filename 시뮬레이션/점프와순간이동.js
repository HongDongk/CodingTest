function solution(n) {
  return n
    .toString(2)
    .split("")
    .filter((a) => a === "1").length;
}
