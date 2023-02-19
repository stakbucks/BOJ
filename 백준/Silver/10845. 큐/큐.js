const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1].split(" "));
}

const answer = [];
const queue = [];

for (let i = 0; i < N; i++) {
  if (arr[i][0] === "push") {
    queue.push(arr[i][1]);
  }
  if (arr[i][0] === "pop") {
    if (queue.length === 0) answer.push(-1);
    else answer.push(queue.shift());
  }
  if (arr[i][0] === "size") {
    answer.push(queue.length);
  }
  if (arr[i][0] === "empty") {
    if (queue.length === 0) answer.push(1);
    else answer.push(0);
  }
  if (arr[i][0] === "front") {
    if (queue.length === 0) answer.push(-1);
    else answer.push(queue[0]);
  }
  if (arr[i][0] === "back") {
    if (queue.length === 0) answer.push(-1);
    else answer.push(queue[queue.length - 1]);
  }
}
console.log(answer.join("\n"));
