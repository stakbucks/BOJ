const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
let stack = [];
const answer = [];
function Do(order) {
  if (order[0] === "push") {
    stack.push(order[1]);
  }
  if (order[0] === "top") {
    if (stack.length === 0) {
      return answer.push("-1");
    }
    return answer.push(stack[stack.length - 1]);
  }
  if (order[0] === "size") {
    return answer.push(stack.length);
  }
  if (order[0] === "empty") {
    if (stack.length === 0) {
      return answer.push("1");
    } else return answer.push("0");
  }
  if (order[0] === "pop") {
    if (stack.length === 0) {
      return answer.push("-1");
    }
    return answer.push(stack.pop());
  }
}
for (let i = 0; i < N; i++) {
  const arr = input[i + 1].split(" ");
  Do(arr);
}
console.log(answer.join("\n"));
