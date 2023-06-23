// 조합

function solution(orders, course) {
  let answer = [];
  let result = [];
  let count = {};

  function getCombinations(arr, selectNumber) {
    const results = [];

    if (selectNumber === 1) return arr.map((a) => [a]);

    arr.forEach((fixed, index) => {
      const rest = arr.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((a) => [fixed, ...a]);
      results.push(...attached);
    });

    return results;
  }

  for (let i of course) {
    orders.map((a) => {
      if (a.length >= i)
        getCombinations(a.split(""), i).map((a) =>
          result.push(a.sort().join(""))
        );
    });
  }

  result.map((a) => {
    count[a] = count[a] ? count[a] + 1 : 1;
  });

  course.map((a) => {
    let max = 0;
    for (let key in count) {
      if (count[key] === 1) continue;
      if (key.length === a) {
        max = max >= count[key] ? max : count[key];
      }
    }

    for (let key in count) {
      if (key.length === a && count[key] === max) answer.push(key);
    }
  });

  return answer.sort();
}
