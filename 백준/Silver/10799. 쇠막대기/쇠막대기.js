const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let i = 0;
const stack = [];
let count = 0;
let sticks = 0;
while (i < input.length) {
  if (input[i] === ")") {
    if (input[i - 1] === "(") {
      stack.pop();
      count += stack.length;
      i++;
    } else {
      stack.pop();
      sticks++;
      i++;
    }
  } else {
    stack.push("(");
    i++;
  }
}
console.log(count + sticks);
