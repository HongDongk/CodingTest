// 최단거리 - BFS(큐)

function solution(begin, target, words) {
    let visited = {[begin] : 0};
    let queue = [begin];
  
    function checkword(a,b) {
        let count = 0;
        const wordlength = a.length;
        
        for (let i =0; i<wordlength; i++){
            if (a[i] !== b[i]){
                count++;
            }
        }
        return count === 1 ? true : false;
    }
    
    while(queue.length>0){
        const changingword = queue.shift();
        
        if (changingword === target) break;
        
        for (let word of words){
            if(checkword(changingword, word) && !visited[word]){
                visited[word] = visited[changingword] + 1;
                queue.push(word);
            }
        }
    }
    
    return visited[target] ? visited[target] : 0 ;
}