// function solution(board){
    
//     const dp=Array.from({length:board.length},()=>Array(board[0].length).fill(0));
        
//     let maxLength=0; // 정사각형 한 변의 최대 길이
    
//     //왼쪽 위 대각선을 확인해야 하기 때문에 첫 행, 첫 열 부터 먼저 확인
//     for(let column=0; column<board.length; column++){
//         dp[column][0]=board[column][0];
//         if(maxLength<dp[column][0]) maxLength=dp[column][0];
//     }
//     for(let row=0; row<board[0].length; row++){
//         dp[0][row]=board[0][row];
//         if(maxLength<dp[0][row]) maxLength=dp[0][row];
//     }
    

//     for(let column=1;  column<board.length; column++){
//         for(let row=1; row<board[0].length; row++){   
//             if(board[column][row]===1){
//                     // 현재 위치의 값이 1이고 
//                     // 왼쪽 위 대각선, 왼쪽, 위쪽 값이 모두 0이 아니면
//                     // 그 중 가장 작은 값 +1 이 현재 위치의 dp
//                     const min=Math.min(dp[column-1][row-1],dp[column-1][row],dp[column][row-1]);
//                     if(min>0){
//                         dp[column][row]=min+1;
//                     }else{
//                         dp[column][row]=1;
//                         }
//                     }
            
//                     // length보다 방금 구한 dp값이 크면 교체
//                     if(maxLength<dp[column][row]) maxLength=dp[column][row];
            
            
//         }        
//     }
    
//     return maxLength**2;
// }

function solution(board) {
  const dp = Array.from({length: board.length}, () => Array(board[0].length).fill(0));

  let max = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        if (i >= 1 && j >= 1) {
          const min = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);

          dp[i][j] = min + 1;
        } else {
          dp[i][j] = 1;
        }
                  max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max ** 2;
}
