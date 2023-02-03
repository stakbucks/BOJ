const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
let arr = [];
function solution(input) {
  for (let i = 0; i < 28; i++) {
    arr[input[i]] = true;
  }
  const answer = [];
  for (let i = 1; i <= 30; i++) {
    if (arr[i] !== true) {
      answer.push(i);
    }
  }
  console.log(answer.join("\n"));
}
solution(input);
