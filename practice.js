const arr = [1, 2, 3, 2, 8];
let answer = 0;
let start = 0;
let end = 0;
let result = 0;

while (arr[start] !== undefined) {
  while (result < 5 && end < arr.length) {
    result += arr[end++];
  }
  if (result === 5) {
    answer++;
  }
  result -= arr[start++];
}

console.log(answer);
// 결과 3
