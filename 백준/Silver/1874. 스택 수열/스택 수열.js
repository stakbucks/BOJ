const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

[n, ...arr] = input;

const stack = [];
const answer = [];

function StackPop() {
  stack.pop();
  answer.push("-");
}
function StackPush(a) {
  stack.push(a);
  answer.push("+");
}

function StackTop() {
  if (stack.length === 0) return 0;
  else return stack[stack.length - 1];
}

function solution(str) {
  let cur = 1;
  for (let i = 0; i < n; i++) {
    const target = str[i];
    while (StackTop() !== target) {
      if (StackTop() < target) {
        StackPush(cur++);
      }
      if (StackTop() > target) {
        return "NO";
      }
    }
    if (StackTop() === target) {
      StackPop();
    }
  }
}

if (solution(arr) === "NO") console.log("NO");
else console.log(answer.join("\n"));