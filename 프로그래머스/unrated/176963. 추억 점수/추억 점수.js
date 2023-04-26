function solution(name, yearning, photo) {
    const answer=[];
    
    for(const p of photo){
        let sum=0;
        for(const item of p){
            const idx=name.findIndex(n=>n===item);
            if(idx!==-1){
                sum+=yearning[idx];
            }
        }
        answer.push(sum);
    }
    return answer;
}