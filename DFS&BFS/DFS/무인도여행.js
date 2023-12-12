// DFS(재귀함수)

function solution(maps) {
  let temp = 0;
  let answer = [];
  maps = maps.map((n) => n.split(""));
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  
  function DFS(x,y){
      if(maps[x][y] !== 'X'){
          temp += Number(maps[x][y]);
          maps[x][y] = 'X';
      }
      for(let i =0; i<4; i++){
          let nx = x + dx[i];
          let ny = y + dy[i];
          if(nx>=0 && ny>=0 && nx<maps.length && ny<maps[0].length && maps[nx][ny] !== 'X'){
              DFS(nx, ny);
          }
      }
  }
  
  for(let i =0; i<maps.length; i++){
      for(let j=0; j<maps[0].length; j++){
          if(maps[i][j] !== 'X'){
              DFS(i,j);
              answer.push(temp);
              temp = 0;
          }
      }
  }
  

  DFS(0,0);
  return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
}
