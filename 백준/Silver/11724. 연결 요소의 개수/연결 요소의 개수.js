const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const adjArr = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  adjArr[i] = [];
}

for (let i = 0; i < M; i++) {
  const [a, b] = input[i + 1].split(" ").map(Number);
  adjArr[a].push(b);
  adjArr[b].push(a);
}

const visited = new Array(N + 1).fill(false);
const queue = [];
let count = 0;

/* bfs로 풀었더니 시간 초과 ㅠ */
// function bfs(index) {
//   visited[index] = true;

//   for (let i = 0; i < adjArr[index].length; i++) {
//     if (!visited[adjArr[index][i]]) queue.push(adjArr[index][i]);
//   }

//   while (queue.length) {
//     const nextIndex = queue.shift();
//     if (!visited[nextIndex]) bfs(nextIndex);
//   }
// }
// for (let i = 1; i <= N; i++) {
//   if (!visited[i]) {
//     count++;
//     bfs(i);
//   }
// }
// console.log(count);

//dfs

function dfs(index) {
  visited[index] = true;
  for (let i = 0; i < adjArr[index].length; i++) {
    if (!visited[adjArr[index][i]]) {
      dfs(adjArr[index][i]);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    count++;
    dfs(i);
  }
}
console.log(count);
