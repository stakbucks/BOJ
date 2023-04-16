const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = Array.from({ length: N }, (i, v) => v + 1);
const answer = [];
let visited = new Array(N).fill(false);
let temp = [];
function go(idx) {
  visited[idx] = true;
  temp.push(arr[idx]);

  if (temp.length === N) {
    answer.push(temp.join(" "));
    visited[idx] = false;
    temp.pop();
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) go(i);
  }
  visited[idx] = false;
  temp.pop();
  return;
}

function solve(N) {
  for (let i = 0; i < N; i++) {
    visited = [];
    temp = [];
    go(i);
  }
  console.log(answer.join("\n"));
}
solve(N);
