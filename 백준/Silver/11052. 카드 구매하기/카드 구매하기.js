const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
P.unshift(0);

const d = [0, P[1], Math.max(2 * P[1], P[2])];
for (let i = 3; i <= N; i++) {
  let max = 0;
  let j = 1;
  while (j <= i) {
    if (j === i) {
      max = Math.max(max, P[i]);
    } else {
      max = Math.max(max, d[j] + d[i - j]);
    }
    j++;
  }
  d[i] = max;
}
console.log(d[N]);
