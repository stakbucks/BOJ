const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);
function solution(i) {
  console.log(i[0] * i[1]);
}
solution(input);
