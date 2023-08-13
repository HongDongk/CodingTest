// 스택과 그리디 사용하기

function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }

  // 숫자가 모두 같을 때 조건처리(777, 8888)
  return arr.slice(0, number.length - k).join("");
}
