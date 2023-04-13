// 멘붕하지말기!!

function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let list = {};

  for (let i of id_list) {
    list[i] = [];
  }

  for (let i of report) {
    if (!list[i.split(" ")[1]].includes(i.split(" ")[0])) {
      list[i.split(" ")[1]].push(i.split(" ")[0]);
    }
  }

  for (let key in list) {
    if (list[key].length >= k) {
      list[key].map((a) => (answer[id_list.indexOf(a)] += 1));
    }
  }

  return answer;
}
