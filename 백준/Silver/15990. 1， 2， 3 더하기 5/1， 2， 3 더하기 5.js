const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
const T = input[0];
const arr = [];
let max = 0;
for (let i = 0; i < T; i++) {
  arr.push(input[i + 1]);
  max = Math.max(max, input[i + 1]);
}
const N = 1000000009;
const answer = [];

function getSum(d) {
  const result = d.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  return result % 1000000009;
}

const sum = [];

const d = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

function solution(num) {
  for (let i = 4; i <= num; i++) {
    const a = d[i - 1][1] + d[i - 1][2];
    const b = d[i - 2][0] + d[i - 2][2];
    const c = d[i - 3][0] + d[i - 3][1];
    d[i] = [a % N, b % N, c % N];
  }
  return;
}

solution(max);
for (let i = 0; i <= max; i++) {
  sum.push(getSum(d[i]));
}
for (let i = 0; i < T; i++) {
  answer.push(sum[arr[i]]);
}
console.log(answer.join("\n"));
