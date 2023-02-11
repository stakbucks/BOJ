const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = Number(input[0]);
const arr = [];
const answer = [];

for (let i = 0; i < T; i++) {
  arr[i] = input[i + 1].split(" ").map(Number);
}
function solution(H, W, N) {
  const room = Math.ceil(N / H);
  let floor = N % H;
  if (floor === 0) floor = H;
  answer.push(floor * 100 + room);
}

for (let i = 0; i < T; i++) {
  solution(arr[i][0], arr[i][1], arr[i][2]);
}
console.log(answer.join("\n"));
