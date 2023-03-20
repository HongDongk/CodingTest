// sort의 원리이해하기!!

function solution(numbers) {
    const answer = numbers.map((a) => a.toString()).sort((a,b) => (b+a) - (a+b)).join('');

    return answer[0] === "0" ? "0" : answer;
}