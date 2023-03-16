const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const d = [1];
for (let i = 1; i < N; i++) {
  d[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      d[i] = Math.max(d[i], d[j] + 1);
    }
  }
}
let max = 0;
for (let i = 0; i < N; i++) {
  max = Math.max(max, d[i]);
}
console.log(max);