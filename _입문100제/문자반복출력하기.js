// 문자열을 배열로바꿀때 - [...str]  or  str.split('')
// 문자열반복하고싶을때 - str.repeat(n) (str을 n번 만큼반복)

function solution(my_string, n) {
    a = [...my_string].map((a) => a.repeat(n)).join('')
    return a;
}