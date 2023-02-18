const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const N = input[0];
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1]);
}
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
