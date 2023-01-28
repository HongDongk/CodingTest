// 배열을 뒤집을땐 - reverse()
// 문자열을 뒤집을땐 - split('')으로 배열로만들어준뒤 reverse() 한다음 다시 join('')로 문자열반환

// 배열뒤집기
function solution(num_list) {
    num_list.reverse()
    return num_list;
}

// 문자열뒤집기
function solution(my_string) {
    var answer = '';
    return my_string.split('').reverse().join('');
}