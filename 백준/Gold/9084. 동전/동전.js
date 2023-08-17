const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const T = Number(input[0]);
  const arr = [];
  for (let i = 1; i < input.length; i += 3) {
    const temp = [];
    temp.push(Number(input[i]));
    temp.push(input[i + 1].split(' ').map(Number));
    temp.push(Number(input[i + 2]));
    arr.push(temp);
  }

  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    const [_, coins, target] = arr[i];
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let j = 0; j < coins.length; j++) {
      for (let k = coins[j]; k <= target; k++) {
        dp[k] += dp[k - coins[j]];
      }
    }
    answer.push(dp[target]);
  }

  console.log(answer.join('\n'));
}
solution(input);