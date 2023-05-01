let arrA = [
  [1, 2, 3],
  [3, 2, 1],
];
let arrB = [...arrA];

arrA.reverse();

console.log(arrA);
// [1, 2, 3]
console.log(arrB);
// [10, 2, 3]
