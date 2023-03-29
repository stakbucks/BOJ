const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = new Array();
const visited = new Array();
const count = new Array();
const queue = [];
for (let i = 0; i < N; i++) {
  graph[i] = [];
  visited[i] = new Array(M).fill(false);
  count[i] = new Array(M).fill(N * M);
}
count[0][0] = 1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    graph[i][j] = Number(input[i + 1][j]);
  }
}
function BFS(i, j) {
  visited[i][j] = true;

  //위
  if (i > 0 && graph[i - 1][j]) {
    if (visited[i - 1][j]) {
      if (count[i - 1][j] > count[i][j] + 1) {
        count[i - 1][j] = count[i][j] + 1;
        visited[i - 1][j] = false;
        queue.push([i - 1, j]);
      }
    } else {
      count[i - 1][j] = count[i][j] + 1;

      queue.push([i - 1, j]);
    }
  }
  //왼쪽
  if (j && graph[i][j - 1]) {
    if (visited[i][j - 1]) {
      if (count[i][j - 1] > count[i][j] + 1) {
        count[i][j - 1] = count[i][j] + 1;
        visited[i][j - 1] = false;
        queue.push([i, j - 1]);
      }
    } else {
      count[i][j - 1] = count[i][j] + 1;

      queue.push([i, j - 1]);
    }
  }
  //아래
  if (i < N - 1 && graph[i + 1][j]) {
    if (visited[i + 1][j]) {
      if (count[i + 1][j] > count[i][j] + 1) {
        count[i + 1][j] = count[i][j] + 1;
        visited[i + 1][j] = false;
        queue.push([i + 1, j]);
      }
    } else {
      count[i + 1][j] = count[i][j] + 1;
      queue.push([i + 1, j]);
    }
  }
  //오른쪽
  if (j < M - 1 && graph[i][j + 1]) {
    if (visited[i][j + 1]) {
      if (count[i][j + 1] > count[i][j] + 1) {
        count[i][j + 1] = count[i][j] + 1;
        visited[i][j + 1] = false;
        queue.push([i, j + 1]);
      }
    } else {
      count[i][j + 1] = count[i][j] + 1;

      queue.push([i, j + 1]);
    }
  }

  while (queue.length) {
    const [a, b] = queue.shift();
    if (!visited[a][b]) {
      BFS(a, b);
    }
  }
}

BFS(0, 0);
console.log(count[N - 1][M - 1]);
