function getPermutations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((a) => [a]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] //fixed값 빼고 만들어진배열
      const permutations = getPermutations(rest, selectNumber - 1); // rest배열에서 하나작게 뽑기
      const attached = permutations.map((a) => [fixed, ...a]); // fixed값과 재귀함수돌린값로 만들어진배열
      results.push(...attached); 
    });

    return results; 
}



console.log(getPermutations(['a','b','c'] , 3));