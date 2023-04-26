const string = "정규식김규식정규식";

console.log(/^(정규식|김규식)+$/g.test(string)); // false
