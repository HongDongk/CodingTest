const set = new Set();

set.add(1).add(2).add(2); // 이렇게도 사용가능한데 중복된 값은 무시된다.
console.log(set); // Set(2) {1, 2}
