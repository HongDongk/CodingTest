const months = [1, 2, 3, 4];

console.log(months.reduce((acc, cur, idx) => (acc += idx), 0));
