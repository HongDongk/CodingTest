// 최소공배수 - 최소공배수는 두 수의 곱을 최대공약수로 나눈것과 같다!!

function solution(n, m) {
    let gcd = 1;
    for(let i = 1; i<=Math.min(n,m); i++){
        if(n%i === 0 && m%i === 0){
            gcd = i;
        }
    }
    return [gcd , (n*m)/gcd];  
}