const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
const arr = [];
for (let i = 0; i < T; i++) {
  arr[i] = input[i + 1].trim().split(" ").map(Number);
}

function solution(arr) {
  const a = arr[0];
  const b = arr[1];
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = (result * a) % 10;
  }
  return result === 0 ? 10 : result;
}
const answer = [];
for (let i = 0; i < T; i++) {
  answer.push(solution(arr[i]));
}
console.log(answer.join("\n"));
