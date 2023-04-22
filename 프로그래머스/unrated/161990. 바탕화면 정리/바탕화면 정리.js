function solution(wallpaper) {
    let y=[Infinity,-1];//최소, 최대
    let x=[Infinity,-1];
    
    for(let i=0; i<wallpaper.length; i++){
        const rowArr=wallpaper[i].split("");
        
        for(let j=0; j<rowArr.length; j++){
            if(rowArr[j]==="#"){
                y[0]=Math.min(y[0],i);
                y[1]=Math.max(y[1],i+1);
                x[0]=Math.min(x[0],j);
                x[1]=Math.max(x[1],j+1);
                
            }
        }
    }
    
    return [y[0],x[0],y[1],x[1]];
}