function solution(number, k) {
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    // 배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }

  // 숫자가 모두 같을 때 조건처리(777, 8888)
  return arr.slice(0, number.length - k).join('');
}
