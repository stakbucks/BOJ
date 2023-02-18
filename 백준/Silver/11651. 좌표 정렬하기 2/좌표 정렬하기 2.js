const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else return a[1] - b[1];
});
const answer = [];
for (let i = 0; i < N; i++) {
  answer.push(arr[i].join(" "));
}

console.log(answer.join("\n"));
