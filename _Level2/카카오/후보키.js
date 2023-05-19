// reduce의 활용.. 어렵다 상당히!

function solution(relation) {
  function getCombination(arr, selectnum) {
    let result = [];
    if (selectnum === 1) return arr.map((a) => [a]);
    arr.forEach((a, idx) => {
      let rest = arr.slice(idx + 1);
      let combination = getCombination(rest, selectnum - 1);
      const attached = combination.map((b) => [a, ...b]);
      result.push(...attached);
    });
    return result;
  }

  function uniqueness(combination) {
    let set = new Set();
    for (let rel of relation) {
      set.add(combination.map((a) => rel[a]).join(""));
    }
    if (set.size === relation.length) {
      return true;
    } else {
      return false;
    }
  }

  function minimality(arr) {
    let result = [];

    while (arr.length > 0) {
      result.push(arr[0]);
      arr = arr.reduce((acc, cur) => {
        let notMinimal = arr[0].every((a) => cur.includes(a));
        if (!notMinimal) acc.push(cur);
        return acc;
      }, []);
    }

    return result.length;
  }

  let idxArr = [];
  let combinations = [];

  for (let i = 0; i < relation[0].length; i++) {
    idxArr.push(i);
  }

  for (let i = 0; i < idxArr.length; i++) {
    combinations.push(...getCombination(idxArr, i + 1));
  }

  return minimality(combinations.filter((a) => uniqueness(a)));
}
