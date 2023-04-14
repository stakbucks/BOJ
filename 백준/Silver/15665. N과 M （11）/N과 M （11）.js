const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const arr = [];
input[1].split(" ").forEach((i) => arr.push(Number(i)));
arr.sort((a, b) => a - b);

let answer = new Set();
let result = [];

function go(idx) {
  result.push(arr[idx]);

  if (result.length === M) {
    if (answer[answer.length - 1] !== result.join(" "))
      answer.add(result.join(" "));
    result.pop();
    return;
  }

  for (let i = 0; i < N; i++) {
    go(i);
  }
  result.pop();
  return;
}

for (let i = 0; i < N; i++) {
  result = [];
  go(i);
}
const answerArr = [];
answer.forEach((i) => answerArr.push(i));
console.log(answerArr.join("\n"));
