const string = "정규식123abc";

console.log(string.replace(/[123]/g, "")); // a,b,c 제거 => '정규식123_'
console.log(string.replace(/[^123]/g, "")); // 1,2,3만 남기고 제거 => '123'
console.log(string.replace(/정규/g, "김"));
