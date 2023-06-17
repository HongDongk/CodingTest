// 순서대로 구현하기

function solution(p) {
  if (p.length === 0) return ""; // 1
  let u = "";
  let v = "";
  let count = 0;

  for (let i = 0; i < p.length; i++) {
    // 2
    p[i] === "(" ? count++ : count--;

    if (count === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  for (let i = 0; i < u.length; i++) {
    u[i] === "(" ? count++ : count--;

    if (count < 0) {
      let str = `(${solution(v)})`; // 4-1 ~ 4-3
      for (let j = 1; j < u.length - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "("); // 4-4
      }
      return str; // 4-5
    }
  }

  return u + solution(v); // 3
}
