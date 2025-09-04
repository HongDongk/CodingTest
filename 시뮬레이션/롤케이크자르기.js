// 한번에 매 반복문마다 slice O(n), Set O(n) 그걸 n번 하면 전체가 **O(n²)**으로 시간초괴남

function solution(topping) {
  let n = topping.length;
  let answer = 0;

  let left = new Array(n).fill(0);
  let leftset = new Set();
  for (let i = 0; i < n; i++) {
    leftset.add(topping[i]);
    left[i] = leftset.size;
  }

  let right = new Array(n).fill(0);
  let rightset = new Set();
  for (let i = n - 1; i >= 0; i--) {
    rightset.add(topping[i]);
    right[i] = rightset.size;
  }

  for (let i = 0; i < n; i++) {
    if (left[i] === right[i + 1]) answer++;
  }

  return answer;
}
