function solution(t, p) {
    let result = 0;
    
    const tmp = [];
    
    for(let i = 0; i < t.length - p.length + 1; i++){
    	tmp.push(t.substring(i, i + p.length));
    }
    
    for(let j = 0; j < tmp.length; j++){
    	if(parseInt(tmp[j]) <= parseInt(p)){
        	result++
        }
    }
    return result;
}