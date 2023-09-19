let newArr = [0, 1]; //0번째 1번째 요소는 고정

    function fibonacci(n){
        if (newArr[n] !== undefined){ 
            return newArr[n]; //이미 있는 건 그대로 리턴
        }
        newArr[n] = fibonacci(n - 1) + fibonacci(n - 2); // 없는 건 새로 만들어서 저장!!!
        return newArr[n];
    };

    fibonacci(5);

console.log(newArr);
