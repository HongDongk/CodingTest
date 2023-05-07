// indexOf()는 한문자의 인덱스 뿐만아니라 문자열의 첫번째 인덱스를 반환해준다 => 'abcd'.indexOf('bc') = 1
// indexOf(b,2) => 두번째 인덱스부터 시작해 b가 있는 인덱스를 반환

function solution(m, musicinfos) {
  const arr = musicinfos.map((a) => {
    let str = "";
    const [start, end, title, code] = a.split(",");
    let [sh, sm] = start.split(":").map((a) => Number(a));
    let [eh, em] = end.split(":").map((a) => Number(a));
    const runtime = 60 * (eh - sh) + em - sm;
    const codeArr = code.match(/[A-Z]#?/g);
    for (let i = 0; i < runtime; i++) {
      str += codeArr[i % codeArr.length];
    }
    return [title, runtime, str];
  });

  const answer = arr.filter(([title, runtime, str]) => {
    let i = str.indexOf(m);
    if (i === -1) return false;
    while (i !== -1) {
      // 포함되어 있다면
      if (str[i + m.length] !== "#") return true; // 찾은 문자 뒤에 #이 없다면 배열 정보를 그대로 반환
      i = str.indexOf(m, i + 1); // 찾은 문자 뒤에 #이 있다면 정답이 아니므로, 찾은 문자 뒤에 m과 일치하는 문자가 있는지 찾는다.
    }
  });

  if (!answer.length) {
    return "(None)";
  } else {
    return answer.sort((a, b) => b[1] - a[1])[0][0];
  }
}
