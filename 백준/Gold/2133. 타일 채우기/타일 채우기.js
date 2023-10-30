const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);

  const dp = Array(N + 1).fill(0);

  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= N; i += 2) {
    dp[i] += dp[i - 2] * dp[2];
    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }
  console.log(dp[N]);
}
solution(input);
