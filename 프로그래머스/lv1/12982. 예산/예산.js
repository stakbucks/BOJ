function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let count=0;
    let sum=0;
    for(const item of d){
        sum+=item;
        if(sum>budget){
            return count;
        }
        count++;
    }
    return count;
}