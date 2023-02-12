// 포함되있는지 여부확인 - array.includes(a)
// 문자열로 변환 - number.toString()

function solution(order) {
    const numbers = ['3','6','9']
    let count = 0
    for (let i of order.toString()){
        if (numbers.includes(i)){
            count+=1
        }
    }
    return count;
}