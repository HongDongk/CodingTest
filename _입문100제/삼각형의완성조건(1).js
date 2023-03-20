// 배열에서 가장큰수 구하기 - Math.max(...array)
// 배열의 합 구하기 - array.reduce((a,b) => a+b, 0)

function solution(sides) {
    const a = Math.max(...sides)
    const b = sides.reduce((a,b) => a+b,0);
    
    if (b-a>a) {
        return 1;
    }
    else{
        return 2;
    }
    
}