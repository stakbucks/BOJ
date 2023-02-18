const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const N = input[0];
const arr = [];
const answer = [];
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += input[i + 1];
  arr.push(input[i + 1]);
}
arr.sort((a, b) => a - b);
let mode = [];
let most = 0;
let count = 0;
for (let i = 0; i < N; i++) {
  if (i === N - 1) {
    count++;
    if (most === count) {
      mode.push(arr[i]);
    }
    if (count > most) {
      mode = [arr[i]];
    }
  } else {
    if (arr[i] !== arr[i + 1]) {
      count++;
      if (most === count) {
        mode.push(arr[i]);
      }
      if (count > most) {
        mode = [arr[i]];
        most = count;
      }
      count = 0;
    }

    if (arr[i] === arr[i + 1]) {
      count++;
    }
  }
}
answer.push(Math.round((sum / N).toFixed(4)));
answer.push(arr[(N - 1) / 2]);
if (mode.length >= 2) {
  answer.push(mode[1]);
} else answer.push(mode[0]);
answer.push(arr[N - 1] - arr[0]);
console.log(answer.join("\n"));