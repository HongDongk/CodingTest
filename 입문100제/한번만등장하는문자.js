// 앞에서부터 일치하는 값의 인덱스를 반환 - array.indexOf(a)
// 끝에서부터 일치하는 값의 인덱스를 반환 - array.lastIndexOf(a)

function solution(s) {
    let ans = [];
    
    let sArr = s.split("");
    
    sArr.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
            ans.push(item);
        }
    })
    
    return ans.sort().join("");
}