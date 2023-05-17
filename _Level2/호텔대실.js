// array.findIndex((a) => a>3) : 배열안에서 3보다 큰 첫번째 원소 반환 없으면 -1 (조건식 indexOf라고 볼 수 있다)

function solution(book_time) {
  book_time.sort(); // 숫자인 문자열도 오름차순으로 정렬됌!!
  let room = [];

  function getNextTime(endTime) {
    const next = endTime.split(":");
    return Number(next[0]) * 60 + Number(next[1]) + 10;
  }

  book_time.map((t) => {
    const tmp = t[0].split(":");
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
    const idx = room.findIndex((a) => a <= startTime);

    if (idx === -1) {
      room.push(getNextTime(t[1]));
    } else {
      room[idx] = getNextTime(t[1]);
    }
  });

  return room.length;
}
