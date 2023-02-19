const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const answer = [];
function Flip(str) {
  let i = 0;
  const result = [];
  const stack = [];
  while (i < str.length) {
    if (str[i] === "<") {
      while (stack.length !== 0) {
        result.push(stack.pop());
      }
      while (str[i] !== ">") {
        result.push(str[i++]);
      }
      result.push(str[i++]);
    } else {
      if (str[i] !== " ") {
        stack.push(str[i++]);
      }
      if (str[i] === " ") {
        while (stack.length !== 0) {
          result.push(stack.pop());
        }
        result.push(" ");
        i++;
      }
    }
  }
  while (stack.length !== 0) {
    result.push(stack.pop());
  }
  return result.join("");
}

console.log(Flip(input));