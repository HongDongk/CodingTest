function solution(array) {
  array.sort((a, b) => a - b);
  const a = (array.length + 1) / 2 - 1;
  return array[a];
}
