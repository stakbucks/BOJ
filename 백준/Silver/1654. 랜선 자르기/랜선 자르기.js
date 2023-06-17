const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(input) {
  const [K, N] = input[0].split(' ').map(Number);
  const arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]));
  }
  let left = 1;
  let right = Math.max(...arr);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = arr.reduce((a, b) => a + Math.floor(b / mid), 0);
    if (sum < N) {
      right = mid - 1;
    }
    if (sum >= N) {
      left = mid + 1;
    }
  }
  console.log(right);
  return right;
}

solution(input);
