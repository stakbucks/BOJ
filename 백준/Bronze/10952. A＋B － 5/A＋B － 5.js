const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const arr = [];
let i = 0;
while (true) {
  const num = input[i].split(" ").map(Number);
  if (num[0] === 0 && num[1] === 0) break;
  else {
    arr.push(num);
    i++;
  }
}
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i][0] + arr[i][1]);
  }
  console.log(answer.join("\n"));
}
solution(arr);
