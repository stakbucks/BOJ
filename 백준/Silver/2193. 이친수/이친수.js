const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const N = Number(input);
const d = [0, 1, 1];
function solution(N) {
  for (let i = 3; i <= N; i++) {
    d[i] = BigInt(d[i - 1]) + BigInt(d[i - 2]);
  }
  return String(d[N]);
}
console.log(solution(N));
