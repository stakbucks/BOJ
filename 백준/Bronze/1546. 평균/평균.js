const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
function solution(N, arr) {
  let M = arr[0];
  for (let i = 1; i < N; i++) {
    if (M < arr[i]) {
      M = arr[i];
    }
  }
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += (arr[i] / M) * 100;
  }
  console.log(sum / N);
}
solution(N, arr);
