array = [1,2,3,3,3,4]
let m = new Map();
for (let n of array) m.set(n, (m.get(n) || 0)+1);
m = [...m];
m.sort((a,b)=> b[1]-a[1]);
console.log(m[0][0]);