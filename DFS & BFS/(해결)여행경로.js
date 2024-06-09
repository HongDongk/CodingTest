// DFS

function solution(tickets) {
  let answer = [];
  let temp = ['ICN'];
  tickets = tickets.sort();
  let check = new Array(tickets.length).fill(false);

  function DFS(start, L) {
    if (L === tickets.length) {
      return answer.push(temp.slice()); // 얕은 복사주의!
    } else {
      for (let i = 0; i < tickets.length; i++) {
        let [s, e] = tickets[i];
        if (s === start && !check[i]) {
          temp.push(e);
          check[i] = true;
          DFS(e, L + 1);
          temp.pop(e);
          check[i] = false;
        }
      }
    }
  }

  DFS('ICN', 0);

  return answer.sort()[0];
}
