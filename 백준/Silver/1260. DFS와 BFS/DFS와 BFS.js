const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((arr) => arr.sort((a, b) => a - b));

const dfsArr = [];
const bfsArr = [];
const dfsVisited = new Array(n + 1).fill(false);
const bfsVisited = new Array(n + 1).fill(false);

function dfs(index) {
  dfsVisited[index] = true;
  dfsArr.push(index);
  let i = 0;
  while (i < graph[index].length) {
    const nextIndex = graph[index][i];
    if (dfsVisited[nextIndex]) {
      i++;
    } else {
      dfs(nextIndex);
    }
  }
}

let bfsQueue = [];
let bfsQueueVisited = new Array(n + 1).fill(false);
function bfs(index) {
  bfsVisited[index] = true;
  bfsArr.push(index);
  for (let i = 0; i < graph[index].length; i++) {
    const nextIndex = graph[index][i];
    if (!bfsVisited[nextIndex] && !bfsQueueVisited[nextIndex]) {
      bfsQueueVisited[nextIndex] = true;
      bfsQueue.push(nextIndex);
    }
  }
  if (bfsQueue.length === 0) return;
  else bfs(bfsQueue.shift());
}

dfs(v);
bfs(v);
console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
