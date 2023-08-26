const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const arr = input[1].split(' ').map(Number);
  const arrows = [];
  for (const number of arr) {
    const idx = arrows.indexOf(number);
    if (idx !== -1) {
      arrows[idx]--;
    } else {
      arrows.push(number - 1);
    }
  }
  console.log(arrows.length);
}
solution(input);
