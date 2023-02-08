const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");
const arr = [];
arr[1] = [];
arr[2] = ["A", "B", "C"];
arr[3] = ["D", "E", "F"];
arr[4] = ["G", "H", "I"];
arr[5] = ["J", "K", "L"];
arr[6] = ["M", "N", "O"];
arr[7] = ["P", "Q", "R", "S"];
arr[8] = ["T", "U", "V"];
arr[9] = ["W", "X", "Y", "Z"];

let sum = 0;
for (let i = 0; i < input.length; i++) {
  const find = input[i];
  for (let j = 2; j <= 9; j++) {
    const number = arr[j].find((a) => a === find);
    if (number !== undefined) {
      sum += j + 1;
    }
  }
}
console.log(sum);
