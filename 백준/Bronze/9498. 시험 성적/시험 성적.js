const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const A = Number(input);
function solution(A) {
  if (A >= 90 && A <= 100) return console.log("A");
  else if (A >= 80 && A <= 89) return console.log("B");
  else if (A >= 70 && A <= 79) return console.log("C");
  else if (A >= 60 && A <= 69) return console.log("D");
  else return console.log("F");
}
solution(A);
