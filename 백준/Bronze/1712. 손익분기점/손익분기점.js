const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);
const A = input[0];
const B = input[1];
const C = input[2];

let answer = 0;

if (B >= C) answer = -1;
else {
  answer = Math.floor(A / (C - B)) + 1;
}

console.log(answer);
