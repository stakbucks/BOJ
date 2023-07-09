const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const S = input[2];
  const PN = 'IO'.repeat(N) + 'I';

  let count = 0;

  const DFS = (i, current) => {
    if (current === PN) {
      return count++;
    }
    if (S[i] !== S[i + 1]) {
      DFS(i + 1, current + S[i + 1]);
    }
  };

  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'I') {
      DFS(i, 'I');
    }
  }

  console.log(count);
}

solution(input);
