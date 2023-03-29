const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const K = Number(input[0]);
const answerArr = [];

let adjArr = [];
let visited = [];
let color = [];
let location = 1;
let answer = "YES";

function initGraph(start) {
  const [V, E] = input[start].split(" ").map(Number);
  let newAdjArr = new Array(V + 1);
  for (let i = 0; i <= V; i++) {
    newAdjArr[i] = [];
  }
  for (let i = 0; i < E; i++) {
    const [a, b] = input[i + start + 1].split(" ").map(Number);
    newAdjArr[a].push(b);
    newAdjArr[b].push(a);
  }
  location += E + 1;

  const newVisited = new Array(V + 1).fill(false);
  visited = [];
  visited = [...newVisited];

  color = [];
  queue = [];

  answer = "YES";

  return newAdjArr;
}

function DFS(index) {
  visited[index] = true;

  for (let i = 0; i < adjArr[index].length; i++) {
    const nextIndex = adjArr[index][i];
    if (!visited[nextIndex]) {
      if (color[index] === "RED") {
        color[nextIndex] = "BLUE";
      } else {
        color[nextIndex] = "RED";
      }
      DFS(nextIndex);
    } else {
      if (color[nextIndex] === color[index]) {
        answer = "NO";
        return;
      }
    }
  }
}

for (let i = 0; i < K; i++) {
  adjArr = [];
  adjArr = [...initGraph(location)];
  for (let j = 1; j < adjArr.length; j++) {
    if (answer === "NO") break;
    if (!visited[j]) {
      color[j] = "RED";
      DFS(j);
    }
  }
  answerArr.push(answer);
}
console.log(answerArr.join("\n"));
