const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0];

function solution(i) {
  console.log(`${input}??!`);
}
solution(input);
