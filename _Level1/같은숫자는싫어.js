// filter() - array.filter((a, idx) => a !== 1) => 1이 아닌것만 남기기

function solution(arr){
    return arr.filter((val,index) => val != arr[index+1]);
}