const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split("").map(Number);
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += arr[i];
}
console.log(sum);
