// 어려운정규식!!

// \w => 모든문자 [A-Za-z0-9_] 와 동일
// [^문자] => 괄호안에 문자를 제거한 것
// ^문자열 => 특정 문자열로시작
// 문자열$ => 특정 문자열로 끝남

function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "") // 알파벳, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    .replace(/(\.)\1+/g, ".") // 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표로 치환
    .replace(/^\.|\.$/g, "") // 마침표(.)가 처음이나 끝에 위치한다면 제거
    .replace(/^$/, "a") // 빈 문자열이라면, new_id에 "a"를 대입
    .slice(0, 15)
    .replace(/\.$/, ""); // 6  마침표(.)가 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거

  const len = answer.length;

  return len > 2 ? answer : answer + answer[len - 1].repeat(3 - len);
}
