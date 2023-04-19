function solution(arr1, arr2) {
  let answer = new Array(arr1.length).fill([]);

  for (let i = 0; i < arr1.length; i++) {
    let count = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let elem = 0;
      for (let k = 0; k < arr2.length; k++) {
        elem += arr1[i][k] * arr2[k][j];
      }
      count.push(elem);
    }
    answer[i] = count;
  }
  return answer;
}
