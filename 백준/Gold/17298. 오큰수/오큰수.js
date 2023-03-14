const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const answer = [];
const stack = [];

for (let i = N - 1; i >= 0; i--) {
  while (arr[i] >= stack[stack.length - 1] && stack.length) {
    stack.pop();
  }
  if (stack.length === 0) {
    answer[i] = -1;
    stack.push(arr[i]);
  } else {
    answer[i] = stack[stack.length - 1];
    stack.push(arr[i]);
  }
}

console.log(answer.join(" "));
