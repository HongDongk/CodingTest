function solution(babbling) {
  return babbling.replace(/(a)\1+/g, "f");
}

console.log(solution("adaaaaa"));
