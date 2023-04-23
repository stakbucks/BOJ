function didWin(board,player){
    //가로줄 완성
    for(let i=0; i<3; i++){
        if(board[i][0]===player && board[i][1]===player && board[i][2]===player){
            return true;
        }
    }
    //세로줄 완성
    for(let i=0; i<3; i++){
        if(board[0][i]===player && board[1][i]===player && board[2][i]===player){
            return true;
        }
    }
    // \ 방향 대각선 완성 
    if(board[0][0]===player && board[1][1]===player && board[2][2]===player){
        return true;
    }
    // / 방향 대각선 완성 
    if(board[0][2]===player && board[1][1]===player && board[2][0]===player){
        return true;
    }
    
    return false;
}

function solution(board) {
    let result=1;
    
    let Ocnt=0;
    let Xcnt=0;
    
    for(const row of board){
        for(const item of row){
            if(item==="O") Ocnt++;
        if(item==="X") Xcnt++;
        }
        
    }
    if(Ocnt<Xcnt){
        return 0;
    }
    if(Ocnt>=Xcnt+2){
        return 0;
    }
    if(didWin(board,"O") && Ocnt===Xcnt){
        return 0;
    }
    if(didWin(board,"X") && Ocnt===Xcnt+1){
        return 0;
    }
return 1;    
}

// 1. O를 표시해야하는데 X를 표시한 경우
// 1-1. O보다 X개수가 더 많은 경우

// 2. X를 표시해야하는데 O를 표시한 경우
// 2-1. X보다 O가 두개 이상 많은 경우

// 3. 게임이 종료된 상황인데 계속 진행한 경우
// 3-1. O가 승리조건을 만족했는데, X와 개수가 같은경우
// 3-2. X가 승리조건을 만족했는데, O가 하나 더 많은 경우