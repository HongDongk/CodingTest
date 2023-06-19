// indexOf()는 한문자의 인덱스 뿐만아니라 문자열의 첫번째 인덱스를 반환해준다 => 'abcd'.indexOf('bc') = 1
// indexOf(b,2) => 두번째 인덱스부터 시작해 b가 있는 인덱스를 반환
// 정규식 (/[A-Z]#?/g) => 알파벳이거나 알파벳# 인것을 반환

function solution(m, musicinfos) {
  let answer = [];
  let result = [];
  for (let musicinfo of musicinfos) {
    let str = "";
    let [start, end, name, melody] = musicinfo.split(",");
    let [sh, sm] = start.split(":").map((a) => Number(a));
    let [eh, em] = end.split(":").map((a) => Number(a));
    const runtime = 60 * (eh - sh) + em - sm;
    const melodyArr = melody.match(/[A-Z]#?/g); // 멜로디 배열로 만들기
    for (let i = 0; i < runtime; i++) {
      str += melodyArr[i % melodyArr.length];
    }

    result.push([name, runtime, str]);
  }

  result.map((a) => {
    let i = a[2].indexOf(m);
    if (i === -1) return;
    while (i !== -1) {
      if (a[2][i + m.length] !== "#") {
        // 찾은 문자 뒤에 #이 없다면 배열 정보를 그대로 반환
        answer.push([a[0], a[1]]);
        break;
      } else {
        i = a[2].indexOf(m, i + 1); // 찾은 문자 뒤에 #이 있다면 정답이 아니므로, 찾은 문자 뒤에 m과 일치하는 문자가 있는지 찾는다.
      }
    }
  });

  if (!answer.length) {
    return "(None)";
  } else {
    return answer.sort((a, b) => b[1] - a[1])[0][0];
  }
}
