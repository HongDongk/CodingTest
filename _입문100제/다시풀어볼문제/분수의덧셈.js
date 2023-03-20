// 최대공약수 구하는방법

// 재귀
function GCD(a,b){
    return(a%b? GCD(b,a%b):b)
}

function solution(numer1, denom1, numer2, denom2) {
    let bunmo = denom1 * denom2
    let bunza = numer1*denom2 + numer2*denom1
    let gcd = GCD(bunmo,bunza)
    
    return [bunza/gcd, bunmo/gcd];
}

// for문
function solution(numer1, denom1, numer2, denom2) {
    let i = 1;
    const a = denom1*denom2; // 분모
    const b = numer1*denom2 + numer2*denom1;  // 분자
    
    for (let x = 2; x<=Math.min(a,b); x++){
        if (a%x === 0 && b%x === 0 ){
            i = x;
        }
    }
    
    return [b/i, a/i]
    
}