const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  const [N, K] = input.shift();
  const students = input.pop();
  const difference = [];

  for (let i = 0; i < students.length - 1; i++) {
    difference.push(students[i + 1] - students[i]);
  }

  difference.sort((a, b) => a - b);
  console.log(difference.slice(0, N - K).reduce((acc, cur) => acc + cur, 0));
  return;
}
solution(input);