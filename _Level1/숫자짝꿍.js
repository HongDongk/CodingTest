// 시간초과!! splice의 시간복잡도

function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");

  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => parseInt(a) === i).length;
    const curY = Y.filter((a) => parseInt(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }

  if (answer === "") return "-1";
  if (parseInt(answer) === 0) return "0";

  return answer
    .split("")
    .sort((a, b) => parseInt(b) - parseInt(a))
    .join("");
}
