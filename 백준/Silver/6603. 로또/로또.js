const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];
let visited;
let temp;
function go(idx, arr, k) {
  if (temp.length === 6) {
    answer.push(temp.join(" "));
    return;
  }

  for (let i = idx + 1; i < k; i++) {
    if (!visited[i]) {
      visited[i] = true;
      temp.push(arr[i]);
      go(i, arr, k);
      visited[i] = false;
      temp.pop();
    }
  }
}

function solve(inputArr) {
  const k = inputArr[0];
  const arr = Array.from({ length: k }, (i, v) => inputArr[v + 1]);
  for (let i = 0; i < k; i++) {
    visited = new Array(k).fill(false);
    temp = [];

    visited[i] = true;
    temp.push(arr[i]);

    go(i, arr, k);
  }
}

let row = 0;
while (1) {
  const inputArr = input[row].split(" ").map(Number);
  if (inputArr.length === 1) break;
  solve(inputArr);
  answer.push("");
  row++;
}
console.log(answer.join("\n"));