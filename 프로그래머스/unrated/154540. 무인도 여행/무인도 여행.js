

function DFS(maps,queue,i,j,visited,maxX,maxY){
    queue.push(maps[i][j]);
    if(i+1<maxY){
        if(!visited[i+1][j]){
            visited[i+1][j]=true;
            if(maps[i+1][j]!=="X"){
                DFS(maps,queue,i+1,j,visited,maxX,maxY);         
            }
        }
    }
    if(i-1>=0){
        if(!visited[i-1][j]){
            visited[i-1][j]=true;
            if(maps[i-1][j]!=="X"){
                DFS(maps,queue,i-1,j,visited,maxX,maxY);         
            }
        }
    
        
    }
    if(j+1<maxX){
        if(!visited[i][j+1]){
            visited[i][j+1]=true;
            if(maps[i][j+1]!=="X"){
                DFS(maps,queue,i,j+1,visited,maxX,maxY);
             }
        }   
    }
        if(j-1>=0){
        if(!visited[i][j-1]){
            visited[i][j-1]=true;
            if(maps[i][j-1]!=="X"){
                DFS(maps,queue,i,j-1,visited,maxX,maxY);
             }
        }   
    }
    }


function solution(maps) {
    const maxX=maps[0].length;
    const maxY=maps.length;
    console.log(maxX,maxY);
    
    const visited=Array.from(Array(maps.length), ()=>Array(maps[0].length).fill(false));
    
    const result=[];
    for(let i=0; i<maxY; i++){
        for(let j=0; j<maxX; j++){
            if(!visited[i][j]){
                visited[i][j]=true;
                if(maps[i][j]!=="X"){
                    const queue=[];
                    DFS(maps,queue,i,j,visited,maxX,maxY);
                    console.log(queue);
                    result.push(queue.reduce((i,v)=>Number(i)+Number(v),0));
                }
            }
            
        }
    }
    return result.length ? result.sort((a,b)=>a-b) : [-1];
       
}