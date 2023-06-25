const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
function solution(i) {
  let result = 0;
  if (i % 4 === 0) {
    if (i % 400 === 0) {
      result = 1;
    } else if (!(i % 100 === 0)) {
      result = 1;
    }
  }
  return result;
}
console.log(solution(input));
