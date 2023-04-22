// 중복을 포함한 합집합, 교집합 구하는 방법

function solution(str1, str2) {
  let array1 = [];
  let array2 = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length - 1; i++) {
    if (/[a-z]/g.test(str1[i]) && /[a-z]/g.test(str1[i + 1])) {
      array1.push(str1[i] + str1[i + 1]);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (/[a-z]/g.test(str2[i]) && /[a-z]/g.test(str2[i + 1])) {
      array2.push(str2[i] + str2[i + 1]);
    }
  }

  let union = []; // 중복포함, 합집합 배열
  let intersect = []; // 중복포함, 교집합 배열

  for (let i of array2) {
    if (array1.indexOf(i) >= 0) {
      intersect.push(array1.splice(array1.indexOf(i), 1)); //***교집합
    }
    union.push(i);
  }

  for (let i of array1) {
    union.push(i);
  }

  if (union.length === 0) {
    return 65536;
  } else {
    return Math.floor((intersect.length / union.length) * 65536);
  }
}
