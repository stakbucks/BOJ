const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const answer = [];
const graph = new Array(N + 2);
const visited = new Array(N + 2);
for (let i = 0; i < N + 2; i++) {
  graph[i] = new Array(N + 2);
  visited[i] = new Array(N + 2);
}
for (let i = 0; i < N + 2; i++) {
  for (let j = 0; j < N + 2; j++) {
    if (i === 0 || i === N + 1) {
      graph[i][j] = 0;
      visited[i][j] = false;
    } else if (j === 0 || j === N + 1) {
      graph[i][j] = 0;
      visited[i][j] = false;
    } else {
      graph[i][j] = Number(input[i][j - 1]);
      visited[i][j] = false;
    }
  }
}

let count = 0;
let villages = 0;

function DFS(i, j) {
  visited[i][j] = true;
  count++;

  if (!visited[i - 1][j] && graph[i - 1][j]) {
    DFS(i - 1, j);
  }
  if (!visited[i][j - 1] && graph[i][j - 1]) {
    DFS(i, j - 1);
  }
  if (!visited[i][j + 1] && graph[i][j + 1]) {
    DFS(i, j + 1);
  }
  if (!visited[i + 1][j] && graph[i + 1][j]) {
    DFS(i + 1, j);
  }
}

for (let i = 0; i < N + 2; i++) {
  for (let j = 0; j < N + 2; j++) {
    if (!visited[i][j] && graph[i][j]) {
      DFS(i, j);
      answer.push(count);
      count = 0;
      villages++;
    }
  }
}

answer.sort((a, b) => a - b);
answer.unshift(villages);
console.log(answer.join("\n"));
