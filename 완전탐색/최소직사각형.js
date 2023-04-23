function solution(sizes) {
    let garo = [];
    let sero = [];
    for (let i in sizes){
        garo.push(Math.max(sizes[i][0] , sizes[i][1]));
        sero.push(Math.min(sizes[i][0] , sizes[i][1]));
    }
    
    return Math.max(...garo) * Math.max(...sero);
}