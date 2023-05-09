// 해결하긴함!!
// 길이가 n인 배열생성 - new Array(n).fill('')
// 10진수 2진수로 바꾸기 - a.toString(2)
// padstart - 특정 값을 채워 기존 스트링을 길이가 n인 스트링으로 만들기 - a.padStart(n,0)
// 정규식

function solution(n, arr1, arr2) {
  let answer = new Array(n).fill("");
  arr1 = arr1.map((a) => a.toString(2).padStart(n, "0"));
  arr2 = arr2.map((a) => a.toString(2).padStart(n, "0"));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answer[i] += Number(arr1[i][j]) + Number(arr2[i][j]);
    }
  }

  return answer.map((a) => a.replace(/[1,2]/g, "#").replace(/0/g, " "));
}
