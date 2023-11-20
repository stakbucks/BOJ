const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  const totaldays = input[1].reduce((acc, cur) => acc + cur, 0) / 3;
  if (totaldays % 1) {
    console.log('NO');
    return;
  }

  let twoCnt = 0;
  input[1].forEach((height) => {
    twoCnt += Math.floor(height / 2);
  });
  if (twoCnt < totaldays) console.log('NO');
  else console.log('YES');
}

solution(input);