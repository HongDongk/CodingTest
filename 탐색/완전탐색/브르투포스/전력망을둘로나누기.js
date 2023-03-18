//트리순회

function solution(n, wires) {
    const links = {}; 
    let x = [];
    let answer = 100; 
    
    wires.map((w) => { 
        const [a, b] = w;
        if(!links[a]) links[a] = [];
        if(!links[b]) links[b] = [];
        links[a].push(b);
        links[b].push(a);
    })
    
    function searchTree(root, exception) {
        let count = 0;
        const array = [root];
        const visited = [];
        visited[root] = true;
        while(array.length){
            const cur = array.pop();
            links[cur].map(next => {
                if(next !== exception && !visited[next]){
                    visited[next] = true;
                    array.push(next);
                }
            })
            count++;
        }
        return count;
    }
    
    wires.map((w) => { 
        const [a, b] = w;
        const dif = Math.abs(searchTree(a,b) - searchTree(b,a));
        answer = answer > dif ? dif : answer;
    })
    return answer;
}