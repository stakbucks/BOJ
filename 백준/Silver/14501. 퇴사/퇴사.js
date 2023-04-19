const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let maxProfit = 0;

const arr = Array.from({ length: N }, (i, v) =>
  input[v + 1].split(" ").map(Number)
);

const dp = new Array(N + 1).fill(0);
function solve() {
  for (let i = 0; i < N; i++) {
    if (i + arr[i][0] <= N) {
      for (let j = i + arr[i][0]; j <= N; j++) {
        dp[j] = Math.max(dp[j], dp[i] + arr[i][1]);
      }
    }
  }
  console.log(Math.max.apply(null, dp));
}
solve();
