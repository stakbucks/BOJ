function solution(board){
    
    const dp=Array.from({length:board.length},()=>Array(board[0].length).fill(0));
    
    const check=(column,row,length)=>{
        let i=column;
        for(let j=row-length; j<=row; j++){
            if(!board[i][j]){
                return;
            }
        }
        let j=row;
        for(let i=column-length; i<=column; i++){
            if(!board[i][j]){
                return;
            }
        }
        dp[column][row]=dp[column-1][row-1]+1;      
        
        
        
//         while(column+length+1<=board.length && row+length+1 <= board[0].length){
//             length++;
//             let i=column+length-1;
//             for(let j=row; j<row+length; j++){
//                 if(board[i][j]!==1){
//                     return length-1;
//                 }else{
//                     dp[i][j]=dp[column][row]-length;
//                 }
//             }

//             let j=row+length-1;
//             for(let i=column; i<column+length; i++){
//                 if(board[i][j]!==1){
//                     return length-1;
//                 }else{
//                     dp[i][j]=dp[column][row]-length;
//                 }
//             }


//         }

//         return length;
    }
        
    let length=0;
    for(let column=0; column<board.length; column++){
        dp[column][0]=board[column][0];
        if(length<dp[column][0]) length=dp[column][0];
    }
    for(let row=0; row<board[0].length; row++){
        dp[0][row]=board[0][row];
        if(length<dp[0][row]) length=dp[0][row];
    }
    for(let column=1;  column<board.length; column++){
        for(let row=1; row<board[0].length; row++){   
            if(board[column][row]===1){
                    const min=Math.min(dp[column-1][row-1],dp[column-1][row],dp[column][row-1]);
                    if(min>0){
                        dp[column][row]=min+1;
                    }else{
                        dp[column][row]=1;
                    }
                    }
                    if(length<dp[column][row]) length=dp[column][row];
            
            
        }        
    }
    
    return length**2;
}