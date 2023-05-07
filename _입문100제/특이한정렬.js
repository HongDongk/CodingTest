// sort() 자유롭게 사용하기!!

function solution(numlist, n) {
    const answer = numlist.sort((a,b) => {
        
        const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
        
        if(aGab === bGab) {
            return b-a
        } 
        
        return aGab-bGab 
    });
    
    return answer
}