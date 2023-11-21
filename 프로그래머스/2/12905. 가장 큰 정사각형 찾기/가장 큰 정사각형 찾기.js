function solution(board) {
  const N = board.length;
  const M = board[0].length;


  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > 0 && i>0 && j>0 ) {
        board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;

      }
                answer = Math.max(board[i][j], answer);
    }
  }
  return answer ** 2;
}