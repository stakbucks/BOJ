const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const T = Number(input);

function solution(T) {
  for (let i = 1; i <= T; i++) {
    for (let j = 1; j < i + 1; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}
solution(T);
