const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
input = input[0];

function solution(input) {
  let i = 1;
  while (i <= input) {
    for (let j = 0; j < input - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < i; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
    i++;
  }
}
solution(input);