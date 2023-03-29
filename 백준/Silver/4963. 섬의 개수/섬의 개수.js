const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = [];
let visited = [];
let location = 0;
let graph;
let W;
let H;
function initGraph(start) {
  const [w, h] = input[start].split(" ").map(Number);
  W = w;
  H = h;
  if (!w && !h) {
    return [];
  }
  const newGraph = new Array(h);
  const newVisited = new Array(h);
  for (let i = 0; i < h; i++) {
    newGraph[i] = [];
    newVisited[i] = new Array(w).fill(false);
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      newGraph[i][j] = input[start + i + 1].split(" ").map(Number)[j];
    }
  }
  location += 1 + h;
  visited = [...newVisited];
  count = 0;
  return newGraph;
}

function DFS(i, j) {
  visited[i][j] = true;
  if (i) {
    if (!visited[i - 1][j] && graph[i - 1][j]) {
      DFS(i - 1, j);
    }
  }
  if (j) {
    if (!visited[i][j - 1] && graph[i][j - 1]) {
      DFS(i, j - 1);
    }
  }
  if (i && j) {
    if (!visited[i - 1][j - 1] && graph[i - 1][j - 1]) {
      DFS(i - 1, j - 1);
    }
  }
  if (i < H - 1) {
    if (!visited[i + 1][j] && graph[i + 1][j]) {
      DFS(i + 1, j);
    }
  }
  if (j < W - 1) {
    if (!visited[i][j + 1] && graph[i][j + 1]) {
      DFS(i, j + 1);
    }
  }
  if (i < H - 1 && j < W - 1) {
    if (!visited[i + 1][j + 1] & graph[i + 1][j + 1]) {
      DFS(i + 1, j + 1);
    }
  }
  if (i < H - 1 && j) {
    if (!visited[i + 1][j - 1] & graph[i + 1][j - 1]) {
      DFS(i + 1, j - 1);
    }
  }
  if (i && j < W - 1) {
    if (!visited[i - 1][j + 1] & graph[i - 1][j + 1]) {
      DFS(i - 1, j + 1);
    }
  }
}

while (1) {
  graph = [];
  graph = [...initGraph(location)];
  if (!graph.length) break;
  let count = 0;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (!visited[i][j] && graph[i][j]) {
        count++;
        DFS(i, j);
      }
    }
  }

  answer.push(count);
}

console.log(answer.join("\n"));
