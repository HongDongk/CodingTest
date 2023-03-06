// 구조분해할당!!!!!!!!! (배열안에서 값 바꾸기)

function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    
    return my_string.join('');
}