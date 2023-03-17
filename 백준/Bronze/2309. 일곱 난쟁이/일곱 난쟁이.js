const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i];
}
const target = sum - 100;

function findTwo(input) {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === target) {
        const newArr = input.filter(
          (item) => item !== input[i] && item !== input[j]
        );
        return newArr;
      }
    }
  }
}
const arr = findTwo(input);
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
