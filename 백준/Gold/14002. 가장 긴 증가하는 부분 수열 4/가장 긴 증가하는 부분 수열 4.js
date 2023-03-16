const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const d = [[arr[0]]];
for (let i = 1; i < N; i++) {
  d[i] = [];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && d[i].length < d[j].length) {
      d[i] = [...d[j]];
    }
  }
  d[i].push(arr[i]);
}
let max = 0;
let maxIndex = 0;
for (let i = 0; i < N; i++) {
  if (max < d[i].length) {
    max = d[i].length;
    maxIndex = i;
  }
}
console.log(max);
console.log(d[maxIndex].join(" "));
