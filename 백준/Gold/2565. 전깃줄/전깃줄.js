const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  let [[N], ...wires] = input;

  wires = wires.sort((a, b) => a[0] - b[0]);
  wires = wires.map((wire) => wire[1]);

  // i를 마지막 원소로 하는, 증가하는 부분 수열 길이 기록
  const dp = Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    const wire = wires[i];
    for (let j = 0; j < i; j++) {
      if (wires[j] < wire) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  console.log(N - Math.max(...dp));
}
solution(input);
