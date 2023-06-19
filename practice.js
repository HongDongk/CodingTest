const string = "A#CCCB##";

// 알파벳이나 알파벳 + #인경우 추출
console.log(string.match(/#/g)); // B##가 있으므로 false
