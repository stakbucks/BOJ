function solution(n, lost, reserve) {
    let count=0; //빌리는 데 성공한 학생 수
    lost.sort((a,b)=>a-b);
    
    for(let i=0; i<lost.length; i++){
        const self=reserve.findIndex(e=>e===lost[i]);
        if(self !== -1){
            reserve[self]=-1;
            lost[i]=-1;
            count++;
        }
    }
   
    for(let i=0; i<lost.length; i++){
        const front=reserve.findIndex(e=>e===lost[i]-1);
        const back=reserve.findIndex(e=>e===lost[i]+1);
        if(front !== -1){
            //앞번호가 여벌이 있는 경우
           reserve[front]=-1;
            count++;
        }else if(back !== -1){
            //뒷번호가 여벌이 있는 경우
           reserve[back]=-1;
            count++;
        }
    }
    return n-lost.length+count;
}