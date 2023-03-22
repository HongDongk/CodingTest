// splice - 배열을 제거하고싶을때 array.splice(제거할인덱스, 제거할인덱스부터 삭제할 갯수);

function solution(number, k) {
  const arr = [];
  for(let i =0; i < number.length; i++){
      while(arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0){
          k--;
          arr.pop();
      }
      arr.push(number[i]);
  }
  
  arr.splice(arr.length-1,k)
  
  return arr.join('');
}