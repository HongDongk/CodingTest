const string = '규식김규식정규식abc';
times = [1, 2, 3, 4, 5];
mid = 2;
const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
console.log(sum);
