// 십진수를 이진수로 바꾸기 - a.toString(2)
// 이진수를 십진수로 바꾸기 - parseInt(a, 2)

function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}