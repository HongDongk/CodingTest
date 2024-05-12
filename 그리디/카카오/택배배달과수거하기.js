// 예시에 낚시가 잇음 => 택배는 무조건 최대로 들고가야됌

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let delSum = deliveries.reduce((a, b) => a + b, 0);
  let pickSum = pickups.reduce((a, b) => a + b, 0);

  // 뒤에서 부터 0이 있으면 제거해줌
  function deleteZero(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 0) {
        arr.pop();
      } else {
        break;
      }
    }
  }

  // 현재 cap에 맞게, 뒤에서부터 빼줌
  // (ex)  0 3 2에 cap이 3이면 => 0 2 0
  function delItem(arr, cap) {
    let cnt = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] >= cap) {
        arr[i] -= cap;
        cnt += cap;
        break;
      } else {
        cap -= arr[i];
        cnt += arr[i];
        arr[i] = 0;
      }
    }

    return cnt;
  }

  while (delSum !== 0 || pickSum !== 0) {
    deleteZero(deliveries);
    deleteZero(pickups);
    answer += 2 * Math.max(deliveries.length, pickups.length);
    delSum -= delItem(deliveries, cap);
    pickSum -= delItem(pickups, cap);
  }

  return answer;
}
