const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function solution(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  console.log(min, max);
}
solution(arr);
