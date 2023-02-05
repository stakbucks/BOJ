const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
function solution(input) {
  const arr = new Array(42);
  for (let i = 0; i < 42; i++) {
    arr[i] = 0;
  }
  for (let i = 0; i < 10; i++) {
    const mod = input[i] % 42;
    arr[mod]++;
  }
  let count = 0;
  for (let i = 0; i < 42; i++) {
    if (arr[i] !== 0) count++;
  }
  console.log(count);
}
solution(input);