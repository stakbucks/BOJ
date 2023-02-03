const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = Number(input[0]);
const arr = [];
for (let i = 0; i < T; i++) {
  const num = input[i + 1].split(" ").map(Number);
  arr.push(num);
}

function solution(T, arr) {
  const answer = [];
  for (let i = 0; i < T; i++) {
    answer.push(arr[i][0] + arr[i][1]);
  }
  console.log(answer.join("\n"));
}
solution(T, arr);
