const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  const [[N], P] = input;
  const dp = Array({length: N}, () => Array(N).fill(0));
  const sorted = P.sort((a, b) => a - b);

  console.log(
    sorted.reduce((acc, cur, idx) => {
      return acc + cur * (N - idx);
    }, 0),
  );
}
solution(input);