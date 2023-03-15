function getPermutations(arr, selectNumber) {
    const results = [];
    
    if(selectNumber === 1){
        return arr.map((a) => [a]);
    }

    arr.forEach((fixed, index, array) => {
        const rest = [...array.slice(0,index) , ...array.slice(index+1)];
        const permutation = getPermutations(rest, selectNumber-1);
        const attached = permutation.map((a) => [...fixed, a]);
        results.push(...attached);
    })

    return results; 
}



console.log(getPermutations(['a','b','c','d'] , 2));