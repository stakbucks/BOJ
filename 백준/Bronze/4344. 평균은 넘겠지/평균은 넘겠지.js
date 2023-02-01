const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const C = Number(input[0]);

for (let i = 1; i <= C; i++) {
  const N = input[i].split(" ").map(Number)[0];
  const arr = input[i].split(" ").map(Number).splice(1);
  solution(N, arr);
}

function solution(N, arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) count++;
  }
  const result = ((count / arr.length) * 100).toFixed(3);
  return console.log(`${result}%`);
}
