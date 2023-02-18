const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const l1 = input[0].split(" ").map(Number);
const N = l1[0];
const k = l1[1];

const l2 = input[1].split(" ").map(Number);
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(l2[i]);
}
arr.sort((a, b) => b - a);
console.log(arr[k - 1]);
