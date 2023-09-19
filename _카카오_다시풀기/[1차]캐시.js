function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    cities = cities.map((a) => a.toLowerCase());
    
    for(let city of cities){
        if(!cache.includes(city)){
            if(cache.length<cacheSize){
                cache.push(city);
            }else{
                cache.push(city);
                cache.shift();
            }
            answer += 5;
        }else{
            cache.splice(cache.indexOf(city),1);
            cache.push(city);
            answer+=1;
        }
    }
    
    return answer;
}