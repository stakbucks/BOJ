const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const N = Number(input);

let a = 1;
let i = 1;
while (N > a) {
  a = a + 6 * i;
  i++;
}
console.log(i);
