const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = Number(input[0]);
const R = [];
const S = [];
for (let i = 0; i < T; i++) {
  const arr = input[i + 1].split(" ");
  R[i] = Number(arr[0]);
  S[i] = arr[1].split("");
}

function solution(R, S) {
  const P = [];
  for (let i = 0; i < S.length; i++) {
    let string = "";
    for (let j = 0; j < R; j++) {
      string += S[i];
    }
    P.push(string);
  }
  console.log(P.join(""));
}

for (let i = 0; i < T; i++) {
  solution(R[i], S[i]);
}
