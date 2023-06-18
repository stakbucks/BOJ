const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [row, column] = input[0].split(" ").map(Number);
  let arr = Array.from({ length: row }, (v, i) =>
    input[i + 1].split(" ").map(Number)
  );
  function go(arr, count, prev) {
    const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const visited = Array.from({ length: arr.length }, () =>
      Array(arr[0].length).fill(false)
    );
    const queue = [];
    queue.push([0, 0]);
    while (queue.length) {
      const [y, x] = queue.shift();
      for (const [dy, dx] of dir) {
        if (
          y + dy >= 0 &&
          y + dy < arr.length &&
          x + dx >= 0 &&
          x + dx < arr[0].length &&
          !visited[y + dy][x + dx] &&
          !arr[y + dy][x + dx]
        ) {
          queue.push([y + dy, x + dx]);
          visited[y + dy][x + dx] = true;
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === 1) {
          for (const [dy, dx] of dir) {
            if (visited[i + dy][j + dx]) {
              arr[i][j] = 0;
              break;
            }
          }
        }
      }
    }
    let cheeseCnt = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j]) {
          cheeseCnt++;
        }
      }
    }
    if (!cheeseCnt) return console.log(count + 1, prev);
    else go(arr, count + 1, cheeseCnt);
  }
  let cheeseCnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j]) {
        cheeseCnt++;
      }
    }
  }
  if (!cheeseCnt) return console.log(count);
  else go(arr, 0, cheeseCnt);
}
solution(input);
