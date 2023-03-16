const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const d = [];
d[0] = arr[0];
let max = arr[0];
for (let i = 1; i < N; i++) {
  d[i] = Math.max(arr[i], d[i - 1] + arr[i]);
  max = Math.max(max, d[i]);
}
console.log(max);
