// array.sort()를 쓰면 원래배열(array)이 바뀐다!!
// 하지만 array.slice().sort()를 쓰면 원래배열은 유지된다!!

function solution(score) {
    let avg = score.map(v=>(v[0]+v[1])/2);
    let sorted = avg.slice().sort((a,b)=>b-a);
    
    return avg.map(v => sorted.indexOf(v) + 1);
}