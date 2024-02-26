// DFS보다 check함수 구현하는게 더 오래걸림...
function solution(users, emoticons) {
  let discount = [ 10, 20, 30, 40 ];
  let temp = [];
  let discountinfo = [];
  let maxplus = 0;
  let maxsum = 0;
  
  function check(prices, discounts){
      let summ = 0;
      let emoticonplus = 0;
      for(let user of users){
          let total = 0;
          for(let i =0; i<prices.length; i++){
              if(discounts[i] >= user[0]){
                  if(total+prices[i] >= user[1]){  // 일정금액 이상이면 플러스가입수 1증가시키고 그 사용자 구매금액 초기화 
                      emoticonplus+=1;
                      total = 0;
                      break;
                  }
                  total += prices[i]
              }
          }
          summ += total;
      }
      if(emoticonplus > maxplus){
          maxplus = emoticonplus;
          maxsum = summ;
      }else if(emoticonplus === maxplus && summ>maxsum){
          maxsum = summ;
      }
  }
  
  function DFS(L){
      if(L === emoticons.length){
          check(temp, discountinfo);
          return;
      }
      for(let d of discount){
          temp[L] = emoticons[L]*(100-d)/100;
          discountinfo[L] = d;
          DFS(L+1);
      }
  }
  
  DFS(0);
  
  
  return [maxplus, maxsum];
}