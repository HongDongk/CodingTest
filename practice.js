function solution(babbling) {
  return babbling.replace(/(\.)\1+/g, ".");
}

console.log(solution("...sf...s"));
