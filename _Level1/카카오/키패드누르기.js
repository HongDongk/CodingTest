// 문제읽고 구현하는 능력!

function solution(numbers, hand) {
  function findlocation(key) {
    const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === key) {
          return [i, j];
        }
      }
    }
  }

  let answer = "";
  let left = "*";
  let right = "#";

  for (let i of numbers) {
    if (i === 1 || i === 4 || i === 7) {
      answer += "L";
      left = i;
    } else if (i === 3 || i === 6 || i === 9) {
      answer += "R";
      right = i;
    } else {
      let middle = findlocation(i);
      let l = findlocation(left);
      let r = findlocation(right);

      let realleft = Math.abs(middle[0] - l[0]) + Math.abs(middle[1] - l[1]);
      let realright = Math.abs(middle[0] - r[0]) + Math.abs(middle[1] - r[1]);

      if (realleft > realright) {
        answer += "R";
        right = i;
      } else if (realleft < realright) {
        answer += "L";
        left = i;
      } else {
        if (hand === "right") {
          answer += "R";
          right = i;
        } else {
          answer += "L";
          left = i;
        }
      }
    }
  }

  return answer;
}
