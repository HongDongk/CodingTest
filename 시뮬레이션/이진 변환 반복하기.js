function solution(s) {
  let a = 0;
  let b = 0;

  while (s !== "1") {
    let temp = "";
    for (let i of s) {
      if (i === "0") a++;
      else {
        temp += i;
      }
    }
    s = temp.length.toString(2);
    b++;
  }

  return [b, a];
}
