// 객체안에 객체로 복잡한 조건 구현하기

function solution(fees, records) {
  let carfee = {};
  for (let i of records) {
    let [time, car, type] = i.split(" ");
    let [hour, min] = time.split(":");

    time = Number(hour) * 60 + Number(min);

    if (!carfee[car]) {
      carfee[car] = {
        totaltime: 0,
        type: type,
        car: Number(car),
        lastInTime: time,
      };
    } else {
      if (type == "IN") {
        carfee[car].lastInTime = time;
      }
      if (type == "OUT") {
        carfee[car].totaltime += time - carfee[car].lastInTime;
      }
    }
    carfee[car].type = type;
  }

  return Object.values(carfee)
    .sort((a, b) => a.car - b.car)
    .map((a) => {
      if (a.type === "IN") {
        a.totaltime += 1439 - a.lastInTime;
      }

      return a.totaltime <= fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((a.totaltime - fees[0]) / fees[2]) * fees[3];
    });
}
