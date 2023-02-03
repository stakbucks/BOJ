const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
function solution(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < 9; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  const answer = [max, maxIndex + 1];
  console.log(answer.join("\n"));
}
solution(input);
