const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const arr = [];
input[1].split(" ").forEach((i) => arr.push(Number(i)));
arr.sort((a, b) => a - b);

let answer = [];
let result = [];
let visited = new Array(N).fill(false);

function go(idx) {
  visited[idx] = true;
  result.push(arr[idx]);

  if (result.length === M) {
    answer.push(result.join(" "));
    result.pop();
    visited[idx] = false;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) go(i);
  }
  result.pop();
  visited[idx] = false;
  return;
}

for (let i = 0; i < N; i++) {
  result = [];
  visited = new Array(N).fill(false);
  go(i);
}
console.log(answer.join("\n"));
