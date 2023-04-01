const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
const answer = [];

const dx = [1, 2, 2, 1, -1, -2, -2, -1];
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

let location = 1;

const queue = [];

function BFS(I, current, target) {
  let moves = new Array(I);
  for (let i = 0; i < I; i++) {
    moves[i] = Array(I).fill(Infinity);
  }
  moves[current[0]][current[1]] = 0;

  while (queue.length) {
    const cord = queue.shift();
    for (let i = 0; i < 8; i++) {
      const nx = cord[0] + dx[i];
      const ny = cord[1] + dy[i];
      if ((nx < 0) | (ny < 0) | (nx >= I) | (ny >= I)) {
        //불가능
        continue;
      } else {
        if (moves[nx][ny] > moves[cord[0]][cord[1]] + 1) {
          moves[nx][ny] = moves[cord[0]][cord[1]] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  answer.push(moves[target[0]][target[1]]);
}

function sol() {
  for (let i = 0; i < T; i++) {
    const I = Number(input[location++]);
    const current = input[location++].split(" ").map(Number);
    const target = input[location++].split(" ").map(Number);
    queue.push(current);
    BFS(I, current, target);
  }
  console.log(answer.join("\n"));
}
sol();
