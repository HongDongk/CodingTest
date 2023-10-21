// 정규식 외웠으면 풀었음

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
  
  if(array1.length === 0 && array2.length === 0) return 65536; 
  
  let union = [];
  let intersect = [];
  
  for (let i of array2) {
      if (array1.includes(i)) {
          array1.splice(array1.indexOf(i), 1);
          intersect.push(i); 
      }
      union.push(i);
  }
  
  array1.map((a) => union.push(a));
  
  return Math.floor((intersect.length/union.length)*65536)
}