const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, k] = input.map(Number);

  let left = 1;
  let right = N * N;
  let result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 1; i <= N; i++) {
      count += getRowCount(i, mid);
    }
    if (count >= k) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  function getRowCount(row, mid) {
    return mid / row >= N ? N : Math.floor(mid / row);
  }

  console.log(result);
}

solution(input);