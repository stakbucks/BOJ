const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let maxProfit = 0;

const arr = Array.from({ length: N }, (i, v) =>
  input[v + 1].split(" ").map(Number)
);

function go(idx, memo, nextDay) {
  maxProfit = Math.max(maxProfit, memo);
  for (let i = nextDay; i < N; i++) {
    if (i + arr[i][0] <= N) {
      go(i, memo + arr[i][1], i + arr[i][0]);
    }
  }

  return;
}

function solve() {
  for (let i = 0; i < N; i++) {
    const memo = arr[i][1];
    const nextDay = i + arr[i][0];
    if (nextDay <= N) {
      go(i, memo, nextDay);
    }
  }

  console.log(maxProfit);
}
solve();
