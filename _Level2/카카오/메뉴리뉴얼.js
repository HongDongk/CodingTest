// 조합 이욯하기

function solution(orders, course) {
  let answer = [];
  let count = {};
  let result = [];

  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((a) => [a]);
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((a) => [fixed, ...a]);
      results.push(...attached);
    });
    return results;
  }

  for (let i of course) {
    for (let j of orders) {
      if (j.length >= i) {
        getCombinations(j.split(""), i).map((a) =>
          answer.push(a.sort().join(""))
        );
      }
    }
  }

  answer.map((a) => {
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
      if (key.length === a && count[key] === max) {
        result.push(key);
      }
    }
  });

  return result.sort();
}
