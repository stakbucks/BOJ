const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
function check(n) {
  if (n === 1) return false;
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
let count = 0;
arr.forEach((i) => {
  if (check(i) === true) count++;
});
console.log(count);