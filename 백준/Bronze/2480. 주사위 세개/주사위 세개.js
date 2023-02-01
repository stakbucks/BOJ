const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const [a, b, c] = input;

function solution(a, b, c) {
  if (a === b && a === c) {
    return console.log(10000 + a * 1000);
  } else if (a === b || b === c || a === c) {
    if (a === b || b === c) return console.log(1000 + b * 100);
    else return console.log(1000 + c * 100);
  } else {
    const sorted = [a, b, c].sort();
    return console.log(sorted[2] * 100);
  }
}
solution(a, b, c);
