const guys = [
  { name: "YD", money: 500000 },
  { name: "Bill", money: 400000 },
  { name: "Andy", money: 300000 },
  { name: "Roky", money: 200000 },
];

// money를 300000 이상 가진 name이 YD인 사람을 찾는다.
const rich = guys.filter((man) => man.money < 300000);

console.log(rich);
