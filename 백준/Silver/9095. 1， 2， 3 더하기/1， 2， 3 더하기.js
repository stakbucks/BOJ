const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
const T = input[0];
const arr = [];
for (let i = 0; i < T; i++) {
  arr.push(input[i + 1]);
}

const answer = [];

function solution(n) {
  const d = [0, 1, 2, 4];
  for (let i = 4; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2] + d[i - 3];
  }
  return d[n];
}
for (let i = 0; i < T; i++) {
  answer.push(solution(arr[i]));
}
console.log(answer.join("\n"));