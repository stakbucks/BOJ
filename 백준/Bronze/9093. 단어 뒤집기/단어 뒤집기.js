const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1]);
}
const answer = [];
function flip(str) {
  const temp = str.split(" ");
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].split("").reverse().join("");
  }
  answer.push(temp.join(" "));
}

for (let i = 0; i < N; i++) {
  flip(arr[i]);
}
console.log(answer.join("\n"));