// 최단거리 - BFS(큐)

function solution(maps) {
    let answer = 1;
    let visited = Array(maps.length).fill().map(()=> Array(maps[0].length).fill(1));
    let que = [[0,0]];
    const maxx = maps.length;
    const maxy = maps[0].length;
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];

    while(que.length > 0){
        let size = que.length;
    
        for(let i = 0; i < size; i++) {
            let [x,y] = que.shift();
            
            for(let j=0; j<4; j++){
                let mx = x + dx[j];
                let my = y + dy[j];
                
                if (mx>=0 && my>=0 && mx<maxx && my<maxy && maps[mx][my] === 1 && visited[mx][my] === 1){
                    if(mx === maxx - 1 && my === maxy - 1){
                        return answer + 1;
                    }
                    else{
                        que.push([mx,my]);
                        visited[mx][my] = 0;
                    }
                }
            }
        }
        answer++;
    }
    
    return -1;
}