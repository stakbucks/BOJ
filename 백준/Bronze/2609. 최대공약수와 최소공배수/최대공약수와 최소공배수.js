const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);
const a = input[0];
const b = input[1];
answer = [];
function gcd(a, b) {
  let n = a % b;
  if (n) {
    gcd(b, n);
  } else {
    answer.push(b);
  }
}
gcd(a, b);

function lcm(a, b) {
  answer.push((a * b) / answer[0]);
}
lcm(a, b);
console.log(answer.join("\n"));
