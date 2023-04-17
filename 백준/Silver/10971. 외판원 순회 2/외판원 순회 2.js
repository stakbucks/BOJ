const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = Array.from(
  Array.from({ length: N }, (i, v) => input[v + 1].split(" ").map(Number))
);

let least = Infinity;

let visited = Array.from({ length: N }, () => false);

let temp = 0;

function go(startIdx, idx, count) {
  if (temp > least) return;
  if (count === N) {
    if (!arr[idx][startIdx]) return;
    least = Math.min(least, temp + arr[idx][startIdx]);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i] && arr[idx][i] !== 0 && idx !== i) {
      temp += arr[idx][i];
      visited[i] = true;
      go(startIdx, i, count + 1);
      temp -= arr[idx][i];
      visited[i] = false;
    }
  }
  return;
}

function solve(N) {
  for (let i = 0; i < N; i++) {
    visited = Array.from({ length: N }, () => false);
    temp = 0;
    visited[i] = true;
    go(i, i, 1);
  }
  console.log(least);
}

solve(N);
