const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const x = input[1].split(" ").map(Number);

function solution(x) {
  const set = new Set(x);
  const arr = [...set].sort((a, b) => a - b);
  const obj = {};
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }
  for (let i = 0; i < x.length; i++) {
    answer[i] = obj[x[i]];
  }
  console.log(answer.join(" "));
}
solution(x);
