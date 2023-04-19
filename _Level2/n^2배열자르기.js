function solution(n, left, right) {
  let ans = [];

  while (left <= right) {
    ans.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }

  return ans;
}
