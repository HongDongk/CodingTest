// 배열에서 요소 한번 교체하기 - array.replace('a' , 'b')
// 배열에서 요소 아예 교체하기 - array.replaceAll('a' , 'b')

function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = []
    
    for(let i = 0; i < num.length; i++){
        numbers = (numbers.split(num[i]).join(i))
    }
    return parseInt(numbers)
}

function solution(numbers) {
    return Number(numbers.replaceAll('zero', '0').replaceAll('one', '1').replaceAll('two', '2').replaceAll('three', '3').replaceAll('four', '4').replaceAll('five', '5').replaceAll('six', '6').replaceAll('seven', '7').replaceAll('eight', '8').replaceAll('nine', '9'));
}
