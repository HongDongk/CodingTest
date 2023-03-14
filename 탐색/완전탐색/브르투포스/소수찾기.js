// 순열구현하기
// 소수판별하기

function solution(numbers) {
    const result = [];
      
    function getPermutations(arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((a) => [a]); 
  
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // fixed값 빼고 만들어진배열
            const permutations = getPermutations(rest, selectNumber - 1); // rest배열에서 하나작게 뽑기
            const attached = permutations.map((a) => [fixed, ...a]); // fixed값과 재귀함수돌린값로 만들어진배열
            results.push(...attached); 
        });
  
        return results; 
    }
      
    function checkPrimeNumber(number){
        if (number < 2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            const remainder = number % i;
            if (remainder === 0) return false;
        }
        return true;
    };
   
    for(let i =1; i<=numbers.length; i++){
        const permutation = [...getPermutations([...numbers], i)];
        permutation.forEach((a) => result.push(parseInt(a.join(""))));
    }
    
    const answer = [...new Set(result)];
    const m = answer.filter((a) => checkPrimeNumber(a));
      
    return m.length;
  };