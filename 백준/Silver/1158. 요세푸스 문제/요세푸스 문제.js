const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const N = input[0];
const K = input[1];
const stack = [];
const answer = [];
for (let i = 0; i < N; i++) {
  stack[i] = i + 1;
}

function Do() {
  for (let i = 0; i < K - 1; i++) {
    stack.push(stack.shift());
  }
  answer.push(stack.shift());
}
while (stack.length !== 0) Do();
answer[0] = "<" + answer[0];
answer[answer.length - 1] = answer[answer.length - 1] + ">";
console.log(answer.join(", "));
