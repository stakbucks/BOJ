const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const str = input[0].split("");
let temp = [];
const M = Number(input[1]);
let arr = [];
for (let i = 0; i < M; i++) {
  arr.push(input[i + 2].split(" "));
}

function P(i) {
  str.push(i);
}

function L() {
  if (str.length === 0) return;
  else temp.push(str.pop());
}

function B() {
  if (str.length === 0) return;
  else str.pop();
}

function D() {
  if (temp.length === 0) return;
  else str.push(temp.pop());
}

for (let i = 0; i < M; i++) {
  if (arr[i][0] === "P") {
    P(arr[i][1]);
  }
  if (arr[i][0] === "L") {
    L();
  }
  if (arr[i][0] === "B") {
    B();
  }
  if (arr[i][0] === "D") {
    D();
  }
}
while (temp.length !== 0) {
  str.push(temp.pop());
}
console.log(str.join(""));
