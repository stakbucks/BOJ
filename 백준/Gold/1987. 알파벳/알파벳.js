const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [R, C] = input[0].split(' ').map(Number);
  const board = input.slice(1);
  let max = 0;
  // const visited = new Set();
  // visited.add(board[0][0]);

  const visited = Array(91).fill(false);
  visited[board[0][0].charCodeAt()] = true;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  function DFS(x, y, visited, count) {
    let hasNextSquare = false;
    for (const [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
        continue;
      }
      if (visited[board[nx][ny].charCodeAt()]) {
        continue;
      }
      hasNextSquare = true;
      visited[board[nx][ny].charCodeAt()] = true;
      // visited.add(board[nx][ny]);
      DFS(nx, ny, visited, count + 1);
      // visited.delete(board[nx][ny]);
      visited[board[nx][ny].charCodeAt()] = false;
    }
    if (!hasNextSquare) {
      max = Math.max(count, max);
      return;
    }
  }
  DFS(0, 0, visited, 1);
  console.log(max);
}
solution(input);
