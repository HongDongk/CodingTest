function GCD(a,b){
    return(a%b? GCD(b,a%b):b)
}

function solution(numer1, denom1, numer2, denom2) {
    let bunmo = denom1 * denom2
    let bunza = numer1*denom2 + numer2*denom1
    let gcd = GCD(bunmo,bunza)
    
    return [bunza/gcd, bunmo/gcd];
}