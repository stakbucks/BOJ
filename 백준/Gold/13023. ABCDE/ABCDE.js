const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = String(input[0]).split(" ").map(Number)[0];
const M = String(input[0]).split(" ").map(Number)[1];
const adjArr = Array.from({ length: N }, () => Array(0));
const visited = new Array(N).fill(false);
const inputArr = [];
for (let i = 0; i < M; i++) {
  inputArr[i] = String(input[i + 1])
    .split(" ")
    .map(Number);
  adjArr[inputArr[i][0]].push(inputArr[i][1]);
  adjArr[inputArr[i][1]].push(inputArr[i][0]);
}
// console.log(visited);
// console.log(adjArr);
let count = 0;
let answer = 0;

function sol(index) {
  count++;
  if (count === 5) {
    console.log(1);
    process.exit();
    return;
  }

  visited[index] = true;
  let i = 0;
  while (i < adjArr[index].length) {
    const nextIndex = adjArr[index][i];
    if (!visited[nextIndex]) {
      //다음 노드가 방문 가능 한 경우
      sol(nextIndex);
    }
    //다음 노드가 방문 불가능한 경우
    i++;
  }
  if (i === adjArr[index].length) {
    //해당 인덱스에서 더 이상 방문 가능한 노드가 없는 경우
    visited[index] = false;
    count--;
    return;
  }
}
let i = 0;
while (!answer && i < N) {
  sol(i);
  i++;
}
if (i === N) console.log(0);
