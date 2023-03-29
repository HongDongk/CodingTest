function solution(n, arr1, arr2) {
    let realarr1 = [];
    let realarr2 = [];
    let answerarr = new Array(n).fill('');
    
    for(let i=0; i<n; i++){
        realarr1.push(arr1[i].toString(2).padStart(n, '0'));
        realarr2.push(arr2[i].toString(2).padStart(n, '0'));
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<realarr1[i].length; j++){
            if(realarr1[i][j] === '1' || realarr2[i][j] === '1'){
                answerarr[i] += '1';
            }else{
                answerarr[i] += '0';
            }
        }
    }
    
    for(let i=0; i<n; i++){
        answerarr[i] = answerarr[i].replace(/1/g, '#').replace(/0/g, ' ');
    }
    
    return answerarr;
}