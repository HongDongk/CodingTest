// 객체안에 객체로 복잡한 조건 구현하기
// 해결완료!

function solution(fees, records) {
  let [basictime, basicfee, plustime, plusfee] = fees;
  let fee = {};
  for (let record of records) {
    let [time, car, type] = record.split(" ");
    let [hour, min] = time.split(":").map((a) => Number(a));
    time = hour * 60 + min;
    if (!fee[car]) {
      fee[car] = {
        totaltime: 0,
        type: type,
        car: Number(car),
        lastInTime: time,
      };
    } else {
      if (type === "IN") {
        fee[car].lastInTime = time;
      }
      if (type === "OUT") {
        fee[car].totaltime += time - fee[car].lastInTime;
      }
    }

    fee[car].type = type;
  }

  return Object.values(fee)
    .sort((a, b) => a.car - b.car)
    .map((a) => {
      if (a.type === "IN") {
        a.totaltime += 1439 - a.lastInTime;
      }
      if (basictime >= a.totaltime) {
        return basicfee;
      } else {
        return (
          basicfee + Math.ceil((a.totaltime - basictime) / plustime) * plusfee
        );
      }
    });
}
