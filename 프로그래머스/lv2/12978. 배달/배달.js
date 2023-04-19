function DFS(idx,dp,adjArr){
    for(let i=0; i<adjArr[idx].length; i++){
        const [next, weight]=adjArr[idx][i];
        
       if(dp[next]>dp[idx]+weight){
           dp[next]=dp[idx]+weight;
           DFS(next,dp,adjArr);
       }
        
    }
}


function solution(N, road, K) {
    const dp=new Array(N+1).fill(Infinity);
    dp[0]=0;
    dp[1]=0;
    
    const adjArr=Array.from({length:N+1},()=>[]);
    
    for(let i=0; i<road.length; i++){
        adjArr[road[i][0]].push([road[i][1],road[i][2]]);
         adjArr[road[i][1]].push([road[i][0],road[i][2]]);
    }
    
   DFS(1,dp,adjArr);
    
    let count=0;
    for(let i=1; i<adjArr.length; i++){
        if(dp[i]<=K){
            count++;
        }
}
    console.log(count);
    

    return count;
}