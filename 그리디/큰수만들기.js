function solution(number, k) {
  const arr = [];
  for(let i =0; i < number.length; i++){
      while(arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0){
          k--;
          arr.pop();
      }
      arr.push(number[i]);
  }
  
  return arr.slice(0, number.length - k).join('');
}