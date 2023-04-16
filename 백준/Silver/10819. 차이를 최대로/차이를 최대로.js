const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let visited = new Array(N).fill(false);
let temp = [];

let max = 0;

function add(temp) {
  let result = 0;
  for (let i = 0; i < N - 1; i++) {
    result += Math.abs(temp[i] - temp[i + 1]);
  }
  return result;
}

function go(i) {
  if (temp.length === N) {
    max = Math.max(max, add(temp));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      temp.push(arr[i]);
      go(i);
      visited[i] = false;
      temp.pop();
    }
  }
}

function solve(N) {
  for (let i = 0; i < N; i++) {
    visited = new Array(N).fill(false);
    visited[i] = true;
    temp = [arr[i]];
    go(i);
  }
  console.log(max);
}

solve(N);