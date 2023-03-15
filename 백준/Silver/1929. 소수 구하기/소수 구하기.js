const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const M = input[0];
const N = input[1];
const arr = [];
for (let i = Number(M); i <= Number(N); i++) {
  arr.push(i);
}

function check(n) {
  if (n === 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
const answer = [];
arr.forEach((i) => {
  if (check(i) === true) answer.push(i);
});
console.log(answer.join("\n"));
